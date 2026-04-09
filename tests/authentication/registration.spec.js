// spec: tests/parabank.test.plan.md
// seed: tests/seed.spec.js

import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Test User Registration With Valid Data', async ({ page }) => {
    // 1. Navigate to the ParaBank home page at https://parabank.parasoft.com/parabank/index.htm
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // Verify page loads successfully and Customer Login section is visible
    await expect(page).toHaveTitle(/ParaBank.*Welcome.*Online Banking/);
    await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
    
    // Verify Register link is displayed
    const registerLink = page.getByRole('link', { name: 'Register' });
    await expect(registerLink).toBeVisible();

    // 2. Click on the 'Register' link
    await registerLink.click();
    
    // Verify Register page loads successfully
    await expect(page).toHaveTitle(/ParaBank.*Register.*Free Online Account Access/);
    
    // Verify Registration form is displayed with all required fields
    await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
    await expect(page.locator('[id="customer.firstName"]')).toBeVisible();
    await expect(page.locator('[id="customer.lastName"]')).toBeVisible();
    await expect(page.locator('[id="customer.address.street"]')).toBeVisible();
    await expect(page.locator('[id="customer.address.city"]')).toBeVisible();
    await expect(page.locator('[id="customer.address.state"]')).toBeVisible();
    await expect(page.locator('[id="customer.address.zipCode"]')).toBeVisible();
    await expect(page.locator('[id="customer.phoneNumber"]')).toBeVisible();
    await expect(page.locator('[id="customer.ssn"]')).toBeVisible();
    await expect(page.locator('[id="customer.username"]')).toBeVisible();
    await expect(page.locator('[id="customer.password"]')).toBeVisible();
    await expect(page.locator('#repeatedPassword')).toBeVisible();

    // 3. Fill in all registration fields with valid test data
    await page.locator('[id="customer.firstName"]').fill('John');
    await page.locator('[id="customer.lastName"]').fill('Doe');
    await page.locator('[id="customer.address.street"]').fill('123 Main St');
    await page.locator('[id="customer.address.city"]').fill('Springfield');
    await page.locator('[id="customer.address.state"]').fill('IL');
    await page.locator('[id="customer.address.zipCode"]').fill('62701');
    await page.locator('[id="customer.phoneNumber"]').fill('217-555-1234');
    await page.locator('[id="customer.ssn"]').fill('123-45-6789');
    
    // Verify all fields are populated correctly
    await expect(page.locator('[id="customer.firstName"]')).toHaveValue('John');
    await expect(page.locator('[id="customer.lastName"]')).toHaveValue('Doe');
    await expect(page.locator('[id="customer.address.street"]')).toHaveValue('123 Main St');
    await expect(page.locator('[id="customer.address.city"]')).toHaveValue('Springfield');
    await expect(page.locator('[id="customer.address.state"]')).toHaveValue('IL');
    await expect(page.locator('[id="customer.address.zipCode"]')).toHaveValue('62701');
    await expect(page.locator('[id="customer.phoneNumber"]')).toHaveValue('217-555-1234');
    await expect(page.locator('[id="customer.ssn"]')).toHaveValue('123-45-6789');

    // 4. Enter a unique username: 'johndoe' and password: 'Test@1234'
    await page.locator('[id="customer.username"]').fill('johndoe');
    await page.locator('[id="customer.password"]').fill('Test@1234');
    
    // Verify Username field accepts the input
    await expect(page.locator('[id="customer.username"]')).toHaveValue('johndoe');
    
    // Verify Password field masks the input for security (type attribute is password)
    const passwordField = page.locator('[id="customer.password"]');
    await expect(passwordField).toHaveAttribute('type', 'password');

    // 5. Confirm the password by entering 'Test@1234' in the Confirm field
    await page.locator('#repeatedPassword').fill('Test@1234');
    
    // Verify Confirm field accepts the matching password
    await expect(page.locator('#repeatedPassword')).toHaveAttribute('type', 'password');

    // 6. Click the 'Register' button
    await page.getByRole('button', { name: 'Register' }).click();
    
    // Verify Registration succeeds
    await expect(page).toHaveTitle(/ParaBank.*Customer Created/);
    
    // Verify Success message is displayed
    await expect(page.getByRole('heading', { name: 'Welcome Doejohndoe' })).toBeVisible();
    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();
    
    // Verify User is redirected to the dashboard
    await expect(page.getByText('Welcome John Doe')).toBeVisible();
    
    // Verify Account Services section is visible (indicating successful login)
    await expect(page.getByRole('heading', { name: 'Account Services' })).toBeVisible();
    
    // Verify Log Out link is available
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  });
});
