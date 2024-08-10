export const GetResponse = async (url, body, callBack) => {
  await fetch(url, {
    method: 'GET',
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(result => {
      callBack(result, null);
    })
    .catch(err => {
      callBack(null, err);
    });
};

export const PostResponse = async (url, body, callBack) => {
    await fetch(url, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: body,
      redirect: 'follow',
    })
      .then(res => res.json())
      .then(result => {
        callBack(result, null);
      })
      .catch(err => {
        callBack(null, err);
      });
  };
