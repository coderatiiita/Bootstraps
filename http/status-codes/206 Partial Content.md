206 Partial Content

# Meaning
Request successful.
Response contains the requested range of data as described in the "Range" Header of the request.

# Single range,
Content-Type - set to the type of document.
Content-Range - is provided

# Multi range,
Content-Type - set to multipart/byteranges.
Each fragment covers 1 range with Content-Range and Content-Type describing it.

# Example 1
### 26012 bytes of partial image data ( single range )
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

# Example 2
### 8000 bytes of pdf data
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
--String_separator--
