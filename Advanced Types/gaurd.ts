type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
    return source.type === 'file'
}

function loadData(source: Source) {
  if ("path" in source) {
    return; // open the file
  }

  // source.connectionUrl => reach out to the database
  // Open + read file OR reach out to database server
}

// Other way of writing gaurd using discriminated unions
function loadDataDiscriminated(source: Source) {
    if (source.type === 'file') {
         return; // open the file
    }

    source.connectionUrl // reach out to the database
}
