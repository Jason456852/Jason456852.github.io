import { FileJson } from "../presenter";

import CVGeneral from "../../media/CV - Pak Ling Yeung - General.pdf";
import CVDeveloper from "../../media/CV - Pak Ling Yeung - Developer.pdf";
import CoverLetter from "../../media/Cover Letter.pdf";

export const fileInfo = [
    new FileJson(CVGeneral, "pdf", "Resume - General", "This resume is for all job types.", "Google Docs", "08-11-2023"),
    new FileJson(CVDeveloper, "pdf", "Resume - Developer", "This resume is for software development job types.", "Google Docs", "08-11-2023"),
    new FileJson(CoverLetter, "pdf", "Cover Letter", "This cover letter is for all job types.", "Google Docs", "08-11-2023"),
];
