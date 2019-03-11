var lent = (function(){

var photoPosts = [
    {
      id: '1',
      descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
      createdAt: new Date('2018-02-23T23:00:00'),
      author: 'Иванов Иван',
      photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
     },
     {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '4',
        
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    }
  ];
  function getPhotoPost(id)
  {
      if (typeof id == "string"){
          return photoPosts[id];
      }
      else {
        return null;
      }
  }
  function removePhotoPost(id)
  {
    if (typeof id == "string"){
        delete photoPosts[id];
        return true;
    } 
    else
    {
        return false;
    }
  }
  function addPhotoPost(photoPostAdd) 
  {
      photoPostAdd.id = photoPosts.length;
  } 
  function compareDate (photoPostA, photopostB){
      return photoPostA.createdAt - photopostB.createdAt;
  }
  function getPhotoPosts(skip, top, filterConfig)
  {
    var photoPostsCopy = [];
    if(skip === undefined)
    {
      skip = 0;
    } 
    if(top === undefined)
    {
      skip = 10;
    } 
    if (typeof filterConfig !=  "undefined" && typeof filterConfig.author == "string"){
        for (i = 0; i < photoPosts.length; ++i){
            if (filterConfig.author == photoPosts[i].author){
                photoPostsCopy.push(photoPosts[i]);
            }
        }
    }
    photoPostsCopy.sort(compareDate);
    var result = [];
    for (i = skip; i < top + skip; ++i){
        result.push(photoPostsCopy[i]);
    }
    return result;
  }
  function editPhotoPost(id, photoPost) 
  {
    if (typeof id == "string"){
        photoPost[id].photoLink = Object.photoLink;
        photoPost[id].author = Object.author;
        photoPost[id].createdAt = Object.createdAt;
        photoPost[id].descriprion = Object.descriprion;
    }
  }
  function validatePhotoPost(photoPost)
  {
      if (typeof photoPost.descriprion == "string" && typeof photoPost.author == "string" && typeof photoPost.photoLink == "string" && typeof photoPost.createdAt == "date"){
          return true;
      }
      else 
      {
          return false;
      }
  }

return { 
    getPhotoPost, 
    getPhotoPosts, 
    addPhotoPost, 
    editPhotoPost, 
    validatePhotoPost, 
    removePhotoPost 
    } 
}());