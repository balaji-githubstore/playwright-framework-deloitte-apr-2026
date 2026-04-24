import XLSX from 'xlsx'

const EXCEL_FILE = 'test-data/hrm-data.xlsx'

class ExcelUtils {

    static getSheetToJson(sheetname: string): any {
        const workbook = XLSX.readFile(EXCEL_FILE)
        const sheet = workbook.Sheets[sheetname]
        if (!sheet) {
            throw new Error(`Sheet ${sheetname} not found`)
        }
        const data = XLSX.utils.sheet_to_json(sheet)
        return data;
    }
}

export { ExcelUtils }