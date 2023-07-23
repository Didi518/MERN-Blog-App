export const getCommentsData = async () => {
  return [
    {
      _id: '10',
      user: {
        _id: 'a',
        name: 'Mohammad Rezaii',
      },
      desc: 'Super post, merci!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2022-12-31T17:22:05.092+0000',
    },
    {
      _id: '11',
      user: {
        _id: 'b',
        name: 'Paul M. Williams',
      },
      desc: 'une réponse pour Mohammad',
      post: '1',
      parent: '10',
      replyOnUser: 'a',
      createdAt: '2022-12-31T17:22:05.092+0000',
    },
    {
      _id: '12',
      user: {
        _id: 'b',
        name: 'Paul M. Williams',
      },
      desc: 'continue frère <3',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2022-12-31T17:22:05.092+0000',
    },
    {
      _id: '13',
      user: {
        _id: 'c',
        name: 'Jessica C. Stephens',
      },
      desc: 'Ton contenu est toujours super intéressant :)',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2022-12-31T17:22:05.092+0000',
    },
  ];
};
