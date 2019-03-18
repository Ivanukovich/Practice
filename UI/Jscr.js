var photoPosts = [
    {
      id: '0',
      descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
      likes: '2',
      hashTags: ['ocean', 'summer'],
      createdAt: new Date('2018-02-23T23:00:00'),
      author: 'Иванов Иван',
      photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
     },
     {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '2',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иваныч',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'            
    },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '4',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:02:00'),
        author: 'Иванович Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '3',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '4',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '2',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:01:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '1',
        hashTags: ['summer'],
        createdAt: new Date('2018-02-23T23:03:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
    }
  ];
class PostList {
    constructor(_posts) {
        this._posts = _posts;
      }
      getPhotoPost(_id)
      {
          if (typeof _id == "string"){
              return this._posts[_id];
          }
          else {
            return null;
          }
      }
      removePhotoPost(_id)
      {
        if (typeof _id == "string"){
            this._posts.splice(_id, 1);
            for(let i = _id; i < this._posts.length; ++i){ 
                this._posts[i].id = String (this._posts[i].id-1);   
            }
            return true;
        } 
        else
        {
            return false;
        }
      }
      addPhotoPost(_photoPostAdd) 
      {
          if (this.validatePhotoPost(_photoPostAdd))
          {
             _photoPostAdd.id = this._posts.length;
            this._posts.push(_photoPostAdd);
            return true;
          }
          else     
          {
              return false;
          }
      } 
      _compareDate (_photoPostA, _photopostB){
          return _photoPostA.createdAt - _photopostB.createdAt;
      }
      getPhotoPosts(_skip, _top, _filterConfig)
      {
        let photoPostsCopy = [];
        if(_skip === undefined)
        {
          _skip = 0;
        } 
        if(_top === undefined)
        {
          _top = 10;
        } 
        if (typeof _filterConfig !=  "undefined" && typeof _filterConfig.author == "string"){
            for (let i = 0; i < this._posts.length; ++i){
                if (_filterConfig.author == this._posts[i].author){
                    photoPostsCopy.push(this._posts[i]);
                }
            }    
        }
        else {
            for (let i = 0; i < this._posts.length; ++i){
                photoPostsCopy.push(this._posts[i]);
            }
        }
        if (typeof _filterConfig !=  "undefined" && typeof _filterConfig.createdAt == "Date"){
            for (let i = 0; i < this._posts.length; ++i){
                if (_filterConfig.createdAt == this._posts[i].createdAt){
                    photoPostsCopy.push(this._posts[i]);
                }
            }    
        }
        else {
            for (let i = 0; i < this._posts.length; ++i){
                photoPostsCopy.push(this._posts[i]);
            }
        }
        if (typeof _filterConfig !=  "undefined" && typeof _filterConfig.likes == "string"){
            for (let i = 0; i < this._posts.length; ++i){
                if (_filterConfig.likes == this._posts[i].likes){
                    photoPostsCopy.push(this._posts[i]);
                }
            }    
        }
        else {
            for (let i = 0; i < this._posts.length; ++i){
                photoPostsCopy.push(this._posts[i]);
            }
        }
        if(typeof _filterConfig != "undefined" && typeof _filterConfig.hashTags != "undefined"){
            for (let i = 0; i < this._posts.length; ++i){
                for (let j = 0; j < _filterConfig.hashTags.length; ++j){
                    if (_filterConfig.hashTags[0] == this._posts[i].hashTags[j]){
                        photoPostsCopy.push(this._posts[i]);
                    }
                }
            }    
        }
        else {
            for (let i = 0; i < this._posts.length; ++i){
                photoPostsCopy.push(this._posts[i]);
            }
        }
        photoPostsCopy.sort(this._compareDate);
        let result = [];
        for (let i = _skip; i < _top + _skip; ++i){
            result.push(photoPostsCopy[i]);
        }
        return result;
      }
      editPhotoPost(id, _photoPost) 
      {
        if (typeof id == "string"){
            this._posts[id].photoLink = _photoPost.photoLink;
            this._posts[id].author = _photoPost.author;
            this._posts[id].createdAt = _photoPost.createdAt;
            this._posts[id].descriprion = _photoPost.descriprion;
            return true;
        }
        else
        {
            return false;
        }
      }
      validatePhotoPost(_photoPost)
      {
          if (typeof _photoPost.descriprion == "string" && typeof _photoPost.id == "string" &&
          typeof _photoPost.author == "string" && typeof _photoPost.photoLink == "string" && typeof _photoPost.createdAt == typeof new Date()){
              return true;
          } 
          else 
          {
              return false;
          }
      }                                                         
     addAll(_postss) 
      {
         let notValidate = [];
          for (let i = 0; i < _postss.length; ++i)
          {
              if (this.validatePhotoPost(_postss[i])) 
              {
                  this.addPhotoPost(_postss[i]);
              }
              else 
              {
                  notValidate.push(_postss[i]);
              }
          }
          return notValidate;
      }
}
const PhotoObject = new PostList (photoPosts); 
console.log (PhotoObject.getPhotoPost('0'));
console.log (PhotoObject.removePhotoPost('0'));
console.log (PhotoObject.getPhotoPost('0'));
console.log (PhotoObject.addPhotoPost(PhotoObject._posts[1]));
console.log (PhotoObject.addPhotoPost({id: 4,
descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
likes: '2',
hashTags: 'nes, retro',
createdAt: new Date('2018-02-23T23:00:00'),
author: 'Иванов Иван',
photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'}));
console.log (PhotoObject.getPhotoPosts(0, 3));
console.log (PhotoObject.editPhotoPost('1', PhotoObject._posts[3]));
console.log (PhotoObject.getPhotoPosts(0, 3, {author:'Иванов Иван'}));
console.log (PhotoObject.addAll(photoPosts));
console.log (PhotoObject.getPhotoPosts(0, 5, {likes:'2'}));
console.log (PhotoObject.getPhotoPosts(0, 2, {createdAt: new Date('2018-02-23T23:00:00')}));
console.log (PhotoObject.getPhotoPosts(0, 2, ocean));