101 Switching Protocols

# Meaning
It indicates the protocol server is switching to.
Happened because client sent "Upgrade" request geader.

Server will send response with "Upgrade" response header.
This will indicate the switched protocol.


# Example with Websockets
HTTP/1.1 101 Switching Protocols
Upgrade: websocket 
Connection: Upgrade