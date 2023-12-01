// Resover file
Query( () => getSearchData/:id)
Params(searchTerm: String)
function searchForData(searchTerm): Promise(searchResponse) {
  try {
  const people = null; // fetch it from a service file
  const newArr = [];
    people.map((obj) => {
      Object.values(obj).forEach(item => {
        if (item.includes(searchItem)) {
          newArr.push(item);
        }
      })

      return {
        status: 200,
        message: 'Sucess',
        data: newArr
      }
    });
  } catch(err) {
    return {
      status: 403,
      message: 'Something went wrong',
      error: err
    }
  }

}
