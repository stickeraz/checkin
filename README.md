# Web-based Check-In/Out System: Syncs with Google Sheets & Calendar, Includes Fraud Prevention 

This form allow employees or visiters without login or another software to check-in or check-out at the working place. The data that user input will be check for any fraud before sending to a Google Sheets for listing and Google Calendar for more better visualize.


## Who use this?

This project is used by the following companies:

- **Small to Medium-Sized Businesses (SMBs)**: These businesses often look for cost-effective solutions that are easy to implement and manage.
- **Companies with Remote or Flexible Work Arrangements**: These companies need a way to track when employees start and end their workday.
- **Healthcare Facilities**: Patient check-in kiosk software is a common requirement in healthcare facilities.
- **Companies with High Visitor Traffic**: Businesses like hotels, large corporate offices, or institutions where there’s a need to track visitor entry and exit could use such a system.
- **Manufacturing Units or Warehouses**: These workplaces often have shift-based work and need a system to track employee attendance and work hours.


## Demo

![image](https://github.com/stickeraz/checkin/assets/169795659/d724066e-0088-4b82-8f29-2e592dfa5a86)

 Link for a [demo](https://stickeraz.github.io/checkin).


## Functions
- **QR Code Scanning**: Quick and secure check-in/out with a simple scan.
- **Google Sheets Integration**: Automatically populates data into a spreadsheet for easy management.
- **Google Calendar Events**: Creates events to track employee check-ins, check-outs, easy to check at anytime. 
- **No Account Required**: Hassle-free usage without the need for logging in or another app, suit for part-time employees or visitors.
- **Fraud Prevention by Location Verification**: Ensures employees are at the office when checking in/out. The system only accepts submissions made from the office location.
- **Cooldown Period**: A 15-minute wait time between submissions to prevent proxy attendance.
- **No running cost**: The web-form is host by Github Pages, intergrated with Google AppScript with no cost monthly.

## How it work:
1. **Set Up**: Generate a free QR by any services online that link to your Github Pages. Then print it out and place the at the office entrance.
2. **Scan to Access**: Employees scan the QR code to access the check-in/out link.
3. **Submit Form**: Employees fill out the form which updates the Google Sheet and creates a calendar event.
4. **Location Check**: The system verifies the check-in location and rejects submissions from outside the office.
5. **Cooldown Compliance**: After submission, the system enforces a wait time before the next check-in/out is allowed.

## Deployment

To deploy this project

```bash
  1. Clone the index.html. You can self-hosted or use Github Pages.
  2. Create a new Google Sheets, or can clone form this template (already have the script, do not need to do step 4)
  3. Create a new Custom Google Calendar, get the ID of it.
  4. From Google Sheets, copy the GoogleScript file content to it. Replace the code of function calendar with your Google Calendar ID.
  5. Deploy the script and get the link.
  6. Replace your link with the Google link on index.html.
  7. [Optional] Generate the QR code link to your index.html. Print it out and put it in the checkin point of the office.
```

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2


## Screenshots

<img src="https://github.com/stickeraz/checkin/assets/169795659/906051fb-c2dd-4a13-a886-339db6a6e307" height="400px" />
<img src="https://github.com/stickeraz/checkin/assets/169795659/43a786f8-badb-48ce-a7cf-e6c375e5583b" height="400px" />
<img src="https://github.com/stickeraz/checkin/assets/169795659/24f7f8a8-2f15-4d18-a14e-25f185675824" height="400px" />
<img src="https://github.com/stickeraz/checkin/assets/169795659/7408b47d-0e37-42e8-a377-f86df79a634b" width="400px" />
<img src="https://github.com/stickeraz/checkin/assets/169795659/4f65d6d7-f265-402c-bdac-522874d4770e" width="400px" />
<img src="https://github.com/stickeraz/checkin/assets/169795659/25765e05-af56-4618-89d7-dab6948f3499" width="400px" />


