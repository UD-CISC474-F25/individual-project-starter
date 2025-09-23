export enum SubmissionType {
  FILE = 'FILE',
  URL = 'URL',
  TEXT = 'TEXT',
  GOOGLE_DOC = 'GOOGLE_DOC',
}

export enum Role {
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
  ADMIN = 'ADMIN',
  TA = 'TA',
}

export enum SubmissionStatus {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  SUBMITTED = 'SUBMITTED',
  GRADED = 'GRADED',
  LATE = 'LATE',
  MISSING = 'MISSING',
  DRAFT = 'DRAFT',
  EXCUSED = 'EXCUSED',
}
