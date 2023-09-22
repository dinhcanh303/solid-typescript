import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';
const readFile = promisify(readFileCb);
type ReportData = {
    //...
}
interface Formatter {
  parse<T>(content: string): T;
}
class XmlFormatter implements Formatter {
  parse<T>(content: string): T {
    // Converts an XML string to an object T
  }
}
class JsonFormatter implements Formatter {
  parse<T>(content: string): T {
    // Converts a JSON string to an object T
  }
}
class ReportReader {
  constructor(private readonly formatter: Formatter) {
  }

  async read(path: string): Promise<ReportData> {
    const text = await readFile(path, 'UTF8');
    return this.formatter.parse<ReportData>(text);
  }
}
// ...
const reader1 = new ReportReader(new XmlFormatter());
const report1 = await reader1.read('report.xml');
// or if we had to read a json report
const reader2 = new ReportReader(new JsonFormatter());
const report2 = await reader2.read('report.json');