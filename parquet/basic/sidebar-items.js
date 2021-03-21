initSidebarItems({"enum":[["ColumnOrder","Column order that specifies what method was used to aggregate min/max values for statistics."],["Compression","Supported compression algorithms."],["ConvertedType","Common types (converted types) used by frameworks when using Parquet. This helps map between types in those frameworks to the base types in Parquet. This is only metadata and not needed to read or write the data."],["Encoding","Encodings supported by Parquet. Not all encodings are valid for all types. These enums are also used to specify the encoding of definition and repetition levels."],["LogicalType","Logical types used by version 2 of the Parquet format."],["PageType","Available data pages for Parquet file format. Note that some of the page types may not be supported."],["Repetition","Representation of field types in schema."],["SortOrder","Sort order for page and column statistics."],["TimeUnit",""],["Type","Types supported by Parquet. These physical types are intended to be used in combination with the encodings to control the on disk storage format. For example INT16 is not included as a type since a good encoding of INT32 would handle this."]],"struct":[["BsonType","Embedded BSON logical type annotation"],["DateType",""],["DecimalType","Decimal logical type annotation"],["EnumType",""],["IntType","Integer logical type annotation"],["JsonType","Embedded JSON logical type annotation"],["ListType",""],["MapType",""],["NullType","Logical type to annotate a column that is always null."],["StringType","Empty structs to use as logical type annotations"],["TimeType","Time logical type annotation"],["TimestampType","Timestamp logical type annotation"],["UUIDType",""]]});