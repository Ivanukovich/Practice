var photoPosts = [
    {
      id: '0',
      descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
      likes: '2',
      hashTags: ['ocean', 'summer'],
      createdAt: new Date('2018-02-23T23:00:00'),
      author: 'Иванов Иван',
      photoLink: 'https://kukarta.ru/wp-content/uploads/2018/08/37306991_214360475893695_5608411481012961280_n.jpg'
     },
     {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '2',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иваныч',
        photoLink: 'https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/6-Photo-256.png'            
    },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '4',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:02:00'),
        author: 'Иванович Иван',
        photoLink: 'https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/6-Photo-256.png'
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '3',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/6-Photo-256.png'
    },
    {
        id: '4',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '2',
        hashTags: ['ocean', 'summer'],
        createdAt: new Date('2018-02-23T23:01:00'),
        author: 'Иванов Иван',
        photoLink: 'https://kukarta.ru/wp-content/uploads/2018/08/37306991_214360475893695_5608411481012961280_n.jpg'
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        likes: '1',
        hashTags: ['summer'],
        createdAt: new Date('2018-02-23T23:03:00'),
        author: 'Иванов Иван',
        photoLink: 'https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/6-Photo-256.png'
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
      removePhotoPostHere(_id)
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
             _photoPostAdd.id = this._posts.length + "";
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
class View{
    constructor()
    {
        this._posts = document.getElementById("MyPhotos");
        this._postModel = document.getElementById("Model").content.querySelector(".Photo");
        this._count = 0;
        this._display = 0;
        this._authors = [];
    }
    showPhotoPosts ()
    {
        if (this._display < photoPosts.length)
        {
            for (let i = this._display; i < this._display + 3; ++i)
            {
              if (i < photoPosts.length)
                {
                    this.addPhotoPost(photoPosts[i]);
                }
            }
            if (this._display + 3 <= photoPosts.length)
            {
                this._display += 3;
            }
            else
            {
                this._display += (photoPosts.length - this._display) % 3;
            }
        }
    }
    addPhotoPost(_photoPost)
    {
        if (!this._authors.includes(_photoPost.author))
        {
            this._authors.push(_photoPost.author);
        }
        this._posts.appendChild(this.getPost(_photoPost));
        this._count++;
        
    }
    getPost (_photoPost)
    {
        const Model = this._postModel.cloneNode(true);
        Model.setAttribute('data-id', this._count);
        Model.querySelector('img').setAttribute('src', _photoPost.photoLink);
        return Model;
        
    }
    removePhotoPost(_id)
    {
        this._posts.querySelector('[data-id="' + _id + '"]').remove();
        for(let i = _id + 1; i < this._count; ++i){ 
            this._posts.querySelector('[data-id="' + i + '"]').setAttribute('data-id', i - 1); 
        }
        this._count--;
            
    }
    editPhotoPost(_id, _photoPost)
    {
        const edit = this._posts.querySelector('[data-id="' + _id + '"]');
        edit.querySelector('img').setAttribute('src', _photoPost.photoLink);
    }
    personalInformation()
    {
        const avatar = document.getElementById("avatar").querySelector("img");
        avatar.setAttribute('src', "https://сезоны-года.рф/sites/default/files/images/shkolnikam/gora.jpg");
        const name = document.getElementById("name").querySelector("a");
        name.textContent = "имя";
    }
    authorsShow()
    {
        const authorsForShow = document.getElementById("textInput");
        const authorNew = document.createElement("p");
        for (let i = 0; i < this._authors.length; ++i)
        {
            authorNew.textContent = this._authors[i];
            authorsForShow.appendChild(authorNew.cloneNode(true));
        }
    }
}
var methods = (function(){
    const _posts = new PostList([]);
    const _view = new View();
    function addPost(post){
        if(_posts.addPhotoPost(post)){
            _view.addPhotoPost(post);
        }
    }
    function getPost(id){
        if(_posts.getPhotoPost(id)){
            _view.getPost(id);
        }
    }
    function removePost(id){
        if(_posts.removePhotoPost(id)){
            _view.removePhotoPost(id);
        }
    }
    function editPost(id, post){
        if(_posts.editPhotoPost(id, post)){
            _view.editPhotoPost(id, post);
        }
    }
    function addPost(post){
        if(_posts.addPhotoPost(post)){
            _view.addPhotoPost(post);
        }
    }
    function authorDisplay(){
        _view.authorsShow();
    }
    function userInformation(){
        _view.personalInformation();
    }
    function showPosts(){
        _view.showPhotoPosts();
    }
    return{
        addPost,
        getPost,
        removePost,
        editPost,
        editPost,
        addPost,
        authorDisplay,
        userInformation,
        showPosts
    };
}());
myStorage = localStorage;
const PhotoObject = new PostList (photoPosts); 
/*console.log (PhotoObject.getPhotoPost('0'));
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
console.log (PhotoObject.getPhotoPosts(0, 2, {createdAt: new Date('2018-02-23T23:00:00')}));*/
//console.log (PhotoObject.getPhotoPosts(0, 2, ocean));

const view = new View ();
view.showPhotoPosts();
//view.addPhotoPost(photoPosts[1]);
//view.addPhotoPost(photoPosts[2]);
//view.addPhotoPost(photoPosts[3]);
//view.removePhotoPost(1)

//view.personalInformation();
//view.authorsShow();
//view.showPhotoPosts();
//view.showPhotoPosts();
//view.removePhotoPost(1);
//view.editPhotoPost(1, photoPosts[4]);
var loadmore = document.getElementById('LoadMore');
var remove = document.getElementById('Remove');
var add = document.getElementById('AddPhoto');
var logout = document.getElementById('LogOut');
var login = document.getElementById('LogIn');
document.getElementById("LogIn").hidden = true;
function handleClickShow()
{
    view.showPhotoPosts();
}
function handleClickRemove(event)
{
    view.removePhotoPost(event.target.parentNode.parentNode.getAttribute('data-id'));
}
//console.log (PhotoObject.addPhotoPost(photoPosts[1]));
//console.log (PhotoObject.addPhotoPost(photoPosts[1]));
//console.log (PhotoObject.addPhotoPost(photoPosts[1]));
function handleClickAdd(list)
{
   console.log (PhotoObject.addPhotoPost(photoPosts[2]));
}
function handleClickLogOut()
{
   document.getElementById("MyGallery").hidden = true;
   document.getElementById("AddPhoto").hidden = true;
   document.getElementById("MyFriends").hidden = true;
   document.getElementById("AddFriend").hidden = true;
   document.getElementById("Notifications").hidden = true;
   document.getElementById("deletePhoto").hidden = true;
   document.getElementById("name").hidden = true;
   document.getElementById("avatar").hidden = true;
   document.getElementById("LogIn").hidden = false;
   document.getElementById("LogOut").hidden = true;
}
function handleClickLogIn()
{
   document.getElementById("MyGallery").hidden = false;
   document.getElementById("AddPhoto").hidden = false;
   document.getElementById("MyFriends").hidden = false;
   document.getElementById("AddFriend").hidden = false;
   document.getElementById("Notifications").hidden = false;
   document.getElementById("deletePhoto").hidden = false;
   document.getElementById("name").hidden = false;
   document.getElementById("avatar").hidden = false;
   document.getElementById("LogIn").hidden = true;
   document.getElementById("LogOut").hidden = false;
}
loadmore.addEventListener('click', handleClickShow);
remove.addEventListener('click', handleClickRemove);
add.addEventListener('click', handleClickAdd);
logout.addEventListener('click', handleClickLogOut);
login.addEventListener('click', handleClickLogIn);



