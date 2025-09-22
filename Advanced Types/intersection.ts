type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

// Intersection
type AccessedFileData = FileData & Status;

// Using Interface
interface FileDataInt {
  path: string;
  content: string;
}

interface StatusInt {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFileDataInt extends FileDataInt, StatusInt {}
