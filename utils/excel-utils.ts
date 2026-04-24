
const EXCEL_FILE = 'test-data/hrm-data.xlsx'
import XLSX from 'xlsx'

class ExcelUtils {

    static readExcel(sheetname: string): any {

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