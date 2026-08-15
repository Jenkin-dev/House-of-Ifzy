/**
 * HOUSE OF IFZY - Google Apps Script
 *
 * HOW TO SET THIS UP (takes about 3 minutes):
 *
 * 1. Open your Google Sheet
 * 2. Click Extensions > Apps Script
 * 3. Delete everything in the editor
 * 4. Paste this entire file in
 * 5. Paste your spreadsheet ID into SPREADSHEET_ID below
 *    (the long string from your sheet's edit URL, between /d/ and /edit)
 * 6. Click Save (the floppy disk icon)
 * 7. Click Deploy > New deployment
 * 8. Click the gear icon next to "Select type" and choose Web app
 * 9. Set "Execute as" to: Me
 *    Set "Who has access" to: Anyone
 * 10. Click Deploy
 * 11. Click Authorize access, sign in with your Google account
 * 12. Copy the Web app URL it gives you
 * 13. Paste that URL into APPS_SCRIPT_URL in admin.html
 *
 * Every time you change this code, go to Deploy > Manage deployments,
 * click the edit (pencil) icon, change version to "New version", and
 * click Deploy. Otherwise your changes do not take effect.
 */

const SPREADSHEET_ID = "1xbFjarJWGL9DjfzcbbI70ppbMHObhT_4_H7F97fR3gM";
const SHEET_NAME = "Sheet1"; // change this if your sheet tab has a different name

const HEADERS = [
  "name",
  "category",
  "price",
  "note",
  "description",
  "photo_1",
  "photo_2",
  "photo_3",
  "video_url",
  "in_stock",
];

/* --------------------------------------------------------------- write */

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Make sure the header row exists. If the sheet is brand new
    // this writes it automatically so she never has to set it up manually.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    const action = e.parameter.action;

    if (action === "add") {
      const row = HEADERS.map((h) => (e.parameter[h] || "").trim());
      sheet.appendRow(row);
      return respond({ ok: true, message: "Product added." });
    }

    if (action === "update") {
      const rowIndex = parseInt(e.parameter.rowIndex, 10);
      if (!rowIndex || rowIndex < 2)
        return respond({
          ok: false,
          error: "Row index is missing or invalid.",
        });
      const row = HEADERS.map((h) => (e.parameter[h] || "").trim());
      sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
      return respond({ ok: true, message: "Product updated." });
    }

    if (action === "delete") {
      const rowIndex = parseInt(e.parameter.rowIndex, 10);
      if (!rowIndex || rowIndex < 2)
        return respond({
          ok: false,
          error: "Row index is missing or invalid.",
        });
      sheet.deleteRow(rowIndex);
      return respond({ ok: true, message: "Product deleted." });
    }

    return respond({ ok: false, error: "Unknown action: " + action });
  } catch (err) {
    return respond({ ok: false, error: err.message });
  }
}

/* ---------------------------------------------------------------- read */

// GET is only used as a quick health check from the admin page on first load.
function doGet(e) {
  return respond({ ok: true, status: "House of Ifzy admin API is running." });
}

/* ------------------------------------------------------------- helpers */

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
