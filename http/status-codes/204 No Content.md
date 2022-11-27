204 No Content

# Meaning
Request succeeded.
Client doesn't need to go away from current page.
Cacheable by default.

ETag header is included in suce response.

# Usecase
PUT request - updating a resource withoit changing page contents.

If resource is created - 201 is returned.
If page is updated - 200 is returned.
