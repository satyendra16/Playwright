# ParaBank Basic Operations Test Plan

## Application Overview

ParaBank is a demo online banking application used for testing and demonstration purposes. The application provides users with features for account management, money transfers, bill payments, and customer service. This test plan covers the basic operations including account registration, customer login, password recovery, contact support, and the main banking services available to authenticated users.

## Test Scenarios

### 1. Authentication Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Test User Registration With Valid Data

**File:** `tests/authentication/registration.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page at https://parabank.parasoft.com/parabank/index.htm
    - expect: Page loads successfully
    - expect: Customer Login section is visible
    - expect: Register link is displayed
  2. Click on the 'Register' link
    - expect: Register page loads successfully
    - expect: Registration form is displayed with all required fields
  3. Fill in all registration fields with valid test data: First Name: 'John', Last Name: 'Doe', Address: '123 Main St', City: 'Springfield', State: 'IL', Zip Code: '62701', Phone: '217-555-1234', SSN: '123-45-6789'
    - expect: All fields are populated correctly
    - expect: Form accepts the data without validation errors
  4. Enter a unique username: 'johndoe' and password: 'Test@1234'
    - expect: Username field accepts the input
    - expect: Password field masks the input for security
  5. Confirm the password by entering 'Test@1234' in the Confirm field
    - expect: Confirm field accepts the matching password
  6. Click the 'Register' button
    - expect: Registration succeeds
    - expect: Success message is displayed
    - expect: User is redirected to either login page or dashboard
    - expect: Account is created in the system

#### 1.2. Test Registration With Missing Required Fields

**File:** `tests/authentication/registration-validation.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: Registration page loads successfully
  2. Leave the First Name field empty and fill only Last Name and other fields
    - expect: Form allows partial entry
  3. Click the Register button without entering First Name
    - expect: Form validation error is displayed
    - expect: Message indicates First Name is required
    - expect: Registration does not proceed
  4. Leave the Username field empty and fill all other fields
    - expect: Form allows partial entry
  5. Click the Register button without entering Username
    - expect: Form validation error is displayed
    - expect: Message indicates Username is required
    - expect: Registration does not proceed
  6. Leave the Password field empty and fill all other fields
    - expect: Form allows partial entry
  7. Click the Register button without entering Password
    - expect: Form validation error is displayed
    - expect: Message indicates Password is required
    - expect: Registration does not proceed

#### 1.3. Test Registration With Mismatched Passwords

**File:** `tests/authentication/registration-password-mismatch.spec.ts`

**Steps:**
  1. Navigate to the registration page and fill all required fields with valid data
    - expect: Registration form is populated with test data
  2. Enter password 'Test@1234' in the Password field
    - expect: Password field accepts the input
  3. Enter different password 'Test@5678' in the Confirm field
    - expect: Confirm field accepts the input
  4. Click the Register button
    - expect: Form validation error is displayed
    - expect: Message indicates passwords do not match
    - expect: Registration does not proceed

#### 1.4. Test Customer Login With Valid Credentials

**File:** `tests/authentication/login.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
    - expect: Customer Login section is visible
  2. Enter a valid username in the Username field
    - expect: Username field accepts the input
  3. Enter the corresponding valid password in the Password field
    - expect: Password field accepts and masks the input
  4. Click the 'Log In' button
    - expect: Login succeeds
    - expect: User is redirected to the dashboard or main account page
    - expect: Logout option becomes available
    - expect: Customer name or account information is displayed

#### 1.5. Test Customer Login With Invalid Credentials

**File:** `tests/authentication/login-invalid.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
  2. Enter an invalid username 'wronguser' in the Username field
    - expect: Username field accepts the input
  3. Enter an invalid password 'wrongpass' in the Password field
    - expect: Password field accepts the input
  4. Click the 'Log In' button
    - expect: Login fails
    - expect: Error message is displayed stating 'The username and password could not be verified'
    - expect: User remains on the login page
    - expect: Form fields are cleared or retain values for user correction

#### 1.6. Test SQL Injection Attempt in Login

**File:** `tests/authentication/login-sql-injection.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
  2. Enter SQL injection payload in username field: "admin' OR '1'='1"
    - expect: Field accepts the input
  3. Enter any value in the password field
    - expect: Password field accepts the input
  4. Click the 'Log In' button
    - expect: Login fails securely
    - expect: Error message is displayed
    - expect: No unauthorized access is granted
    - expect: Application handles potential injection safely

#### 1.7. Test Login With Empty Fields

**File:** `tests/authentication/login-empty-fields.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
  2. Leave the Username field empty and click the 'Log In' button
    - expect: Error message is displayed or login fails
    - expect: No login proceeds with empty username
  3. Enter a username but leave the Password field empty and click 'Log In'
    - expect: Error message is displayed or login fails
    - expect: No login proceeds with empty password
  4. Leave both Username and Password fields empty and click 'Log In'
    - expect: Error message is displayed or login fails
    - expect: Form requires both fields to be filled

### 2. Account Recovery Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test Customer Lookup With Valid Account Information

**File:** `tests/recovery/customer-lookup.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
    - expect: Customer Login section is visible
  2. Click on 'Forgot login info?' link
    - expect: Customer Lookup page loads successfully
    - expect: Form with required fields is displayed
  3. Enter valid account information: First Name, Last Name, Address, City, State, Zip Code, and SSN
    - expect: All fields accept the input
    - expect: Form is populated correctly
  4. Click 'Find My Login Info' button
    - expect: Lookup succeeds
    - expect: User's username and recovery information are displayed
    - expect: User can retrieve the login credentials

#### 2.2. Test Customer Lookup With Invalid Information

**File:** `tests/recovery/customer-lookup-invalid.spec.ts`

**Steps:**
  1. Navigate to the Customer Lookup page
    - expect: Customer Lookup page loads successfully
  2. Enter incorrect account information (non-matching SSN or address)
    - expect: Form accepts the input
  3. Click 'Find My Login Info' button
    - expect: Lookup fails
    - expect: Error message is displayed indicating account not found
    - expect: No sensitive information is exposed

#### 2.3. Test Customer Lookup With Missing Required Fields

**File:** `tests/recovery/customer-lookup-missing-fields.spec.ts`

**Steps:**
  1. Navigate to the Customer Lookup page
    - expect: Customer Lookup page loads successfully
  2. Leave the SSN field empty and fill other fields
    - expect: Form allows partial entry
  3. Click 'Find My Login Info' button
    - expect: Form validation requires all fields
    - expect: Error message indicates required field is missing
    - expect: Lookup does not proceed

### 3. Contact and Support Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test Contact Form Submission With Complete Information

**File:** `tests/support/contact-form.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
  2. Click on 'Contact Us' link in the footer or navigation
    - expect: Contact page loads successfully
    - expect: Customer Care form is displayed
  3. Enter Name: 'Test User' in the Name field
    - expect: Name field accepts the input
  4. Enter Email: 'test@example.com' in the Email field
    - expect: Email field accepts the input
  5. Enter Phone: '555-1234' in the Phone field
    - expect: Phone field accepts the input
  6. Enter Message: 'This is a test message for customer support' in the Message field
    - expect: Message field accepts the input
  7. Click 'Send to Customer Care' button
    - expect: Form submission succeeds
    - expect: Success message is displayed
    - expect: Form is cleared or user is redirected
    - expect: Support ticket or confirmation is generated

#### 3.2. Test Contact Form With Invalid Email Format

**File:** `tests/support/contact-form-invalid-email.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact page loads successfully
  2. Fill in all fields with valid data except enter invalid email 'notanemail' in Email field
    - expect: Email field accepts the input initially
  3. Click 'Send to Customer Care' button
    - expect: Form validation fails
    - expect: Error message indicates invalid email format
    - expect: Form submission does not proceed

#### 3.3. Test Contact Form With Missing Required Fields

**File:** `tests/support/contact-form-missing-fields.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact page loads successfully
  2. Fill in only Name field and leave others empty
    - expect: Name field is populated
  3. Click 'Send to Customer Care' button
    - expect: Form validation fails
    - expect: Error message indicates required fields are missing
    - expect: Form submission does not proceed

### 4. Navigation and UI Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test Navigation Menu Links

**File:** `tests/navigation/menu-navigation.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
    - expect: Main navigation menu is visible
  2. Click on 'About Us' link in the main navigation
    - expect: About Us page loads successfully
    - expect: Page displays ParaSoft Demo Website information
  3. Click on 'Services' link in the main navigation
    - expect: Services page loads successfully
    - expect: Available banking services are listed
  4. Click on 'Products' link
    - expect: Products page or external products page loads
    - expect: No errors occur during navigation
  5. Click on 'Locations' link
    - expect: Locations page loads
    - expect: Banking locations or contact information is displayed

#### 4.2. Test Footer Navigation Links

**File:** `tests/navigation/footer-navigation.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page
    - expect: Home page loads successfully
    - expect: Footer is visible at the bottom
  2. Click on 'Home' link in the footer
    - expect: User is returned to the home page
    - expect: Page loads successfully
  3. Click on 'Site Map' link in the footer
    - expect: Site Map page loads successfully
    - expect: Complete site structure is visible
  4. Click on 'Contact Us' link in the footer
    - expect: Contact page loads successfully
  5. Verify all footer links are functional and lead to the correct pages
    - expect: All links work correctly
    - expect: No broken links or 404 errors occur

### 5. Page Load and Responsiveness Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test Page Load Performance

**File:** `tests/performance/page-load.spec.ts`

**Steps:**
  1. Navigate to the ParaBank home page and measure page load time
    - expect: Page loads within acceptable time (e.g., < 3 seconds)
    - expect: All elements are rendered correctly
    - expect: No console errors are present
  2. Navigate to the Registration page and measure load time
    - expect: Page loads within acceptable time
    - expect: All form fields are visible and functional
  3. Navigate to Customer Lookup page and measure load time
    - expect: Page loads within acceptable time
    - expect: Form fields are accessible
  4. Navigate to Contact page and measure load time
    - expect: Page loads within acceptable time
    - expect: Form is ready for input

#### 5.2. Test Page Responsiveness

**File:** `tests/responsiveness/responsive-design.spec.ts`

**Steps:**
  1. Access ParaBank home page on a desktop browser (1920x1080 resolution)
    - expect: Page layout is correct
    - expect: All elements are properly positioned
    - expect: No horizontal scrolling is required
  2. Access ParaBank home page on a tablet browser (768x1024 resolution)
    - expect: Page layout adapts properly
    - expect: Content is readable
    - expect: Navigation is accessible
  3. Access ParaBank home page on a mobile browser (375x667 resolution)
    - expect: Page layout is optimized for mobile
    - expect: Menu is accessible (hamburger menu or responsive nav)
    - expect: Content is readable without excessive scrolling
  4. Verify login form is easily accessible and usable on all screen sizes
    - expect: Form fields are properly sized
    - expect: Login button is easily clickable
    - expect: No form elements are hidden or overlapped

### 6. Data Security and Validation Tests

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test Password Security and Masking

**File:** `tests/security/password-masking.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: Registration page loads successfully
  2. Click on the Password field and type a password 'Test@1234'
    - expect: Password characters are masked with asterisks or dots
    - expect: Actual password is not visible in the field
  3. Inspect the password field using browser developer tools
    - expect: Input type is 'password'
    - expect: No plain text password is visible in the DOM
  4. Navigate to login page and repeat password masking test
    - expect: Login password field also masks input correctly

#### 6.2. Test XSS Prevention in Form Fields

**File:** `tests/security/xss-prevention.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: Registration page loads successfully
  2. Enter XSS payload '<script>alert("XSS")</script>' in the First Name field
    - expect: Field accepts the input
    - expect: No JavaScript alert is triggered
  3. Fill remaining fields and click Register
    - expect: No XSS payload is executed
    - expect: Input is properly sanitized or escaped
  4. Test XSS payload in Contact form fields
    - expect: No JavaScript executes
    - expect: Payload is treated as plain text

#### 6.3. Test Input Field Length Validation

**File:** `tests/security/input-validation.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: Registration page loads successfully
  2. Enter extremely long string (1000+ characters) in First Name field
    - expect: Field has character limit
    - expect: Input is truncated or rejected
  3. Enter special characters in the Address field
    - expect: Field accepts reasonable special characters
    - expect: Form handles input appropriately
  4. Test SSN field with non-numeric input
    - expect: Field validates SSN format
    - expect: Non-numeric input is rejected or handled
