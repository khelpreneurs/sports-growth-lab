# TODO: Add Browser Notification to Footer Newsletter Submission

- [x] Modify `src/components/Footer.tsx` to add browser notification logic in `handleNewsletterSubmit` function
  - Request notification permission if not granted
  - Show browser notification with success message after toast

# TODO: Integrate Email Storage in Google Spreadsheet

- [x] Set up Google Apps Script in the spreadsheet to append emails
- [x] Modify `src/components/Footer.tsx` to send email to Google Apps Script URL on submission
