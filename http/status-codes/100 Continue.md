100 Continue

# Meaning
Everything is OK so far.
Client can continue the request or ignore if finished.

# For server check,
In Initial request request header,  Client must send "Expect: 100-continue"
Upon receiving "100-continue" as a response, the request body will be sent.





