import React, { Component } from 'react';
import './App.css';
import AppTab from '../AppTab/AppTab';
import AppItem from '../AppItem/AppItem';
import AppItemEmpty from '../AppItem/AppItemEmpty/AppItemEmpty';
import AppFilter from '../AppFilter/AppFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedStatus: 'toread',
      buttonCaption: 'start reading →',
      filterTags: [],
    };
  }

  componentDidMount() {
    const bookLocal = JSON.parse(localStorage.getItem('booksList'));
    //Если в LS есть книги, берем оттуда, иначе - фетчим json
    if (bookLocal) {
      this.setState({
        books: bookLocal,
      });
    } else {
      fetch('./date/books.json')
        .then(response => response.json())
        .then(result => this.listFormatter(result.items))
        .catch(() => {
          console.log('АЛАРМ! Проблемы с данными!');
        });
    }
  }

  componentDidUpdate() {
    //Обновляем LS каждый раз, когда обновляются props/state
    localStorage.setItem('booksList', JSON.stringify(this.state.books));
  }

  getBooks(self) {
    //Метод, отбирающий необходимые книги по табу и фильтрам
    let booksList = this.state.books.filter((book) => {
      return book.status === self.state.selectedStatus;
    });
    if (self.state.filterTags.length) {
      booksList = booksList.filter((book) => {
        for (let tag of book.tags) {
          for (let tagFiltered of self.state.filterTags)
            if (tagFiltered === tag) {
              return book;
            }
        }
        return null;
      });
    }
    return booksList;
  }

  getBooksAmount(tab) {
    //Возвращаем количество книг на вкладке
    const booksList = this.state.books.filter((book) => {
      return book.status === tab;
    });
    return booksList.length;
  }

  statusSelectHandler = (selectedStatus) => {
    //Управляем caption на кнопке смены "статуса книги"
    let buttonCaption;
    if (selectedStatus === 'toread') {
      buttonCaption = 'start reading →';
    } else if (selectedStatus === 'inprogress') {
      buttonCaption = 'finish reading →';
    } else {
      buttonCaption = 'return in «to read» ↲';
    }
    this.setState({
      selectedStatus,
      buttonCaption,
    });
  }

  listFilter = (book, newStatus) => {
    const bookList = this.state.books;
    bookList[bookList.indexOf(book)].status = newStatus;
    this.setState({
      books: bookList,
    });
  }

  addTag = (tag) => {
    //Добавляем тэг в фильтр-список
    const tagArray = this.state.filterTags;
    if (tagArray.indexOf(tag) === -1) {
      tagArray.push(tag);
      this.setState({
        filterTags: tagArray,
      });
    }
  }

  removeTag = (tag) => {
    //Удаляем тэг из фильтр-списока
    const tagArray = this.state.filterTags;
    if (tagArray.indexOf(tag) !== -1) {
      tagArray.splice(tagArray.indexOf(tag), 1);
      this.setState({
        filterTags: tagArray,
      });
    }
  }

  isListEmpty() {
    //Если книг в табе нет
    if (this.getBooks(this).length > 0) {
      return this.getBooks(this).map((item, index) =>
        <AppItem   bookItem={item}
          index={index}
          key={index}
          selectedStatus={this.state.selectedStatus}
          listFilter={this.listFilter}
          buttonCaption={this.state.buttonCaption}
          tagClick={this.addTag}
        />);
    } else {
      return <AppItemEmpty/>;
    }
  }

  listFormatter(books) {
    //При инициализации - добавляем в каждый элемент поле статус
    let tempBooks = books;
    for (let book in tempBooks) {
      tempBooks[book].status = 'toread';
    }
    this.setState({ books });
  }

  selectTabClass(selector) {
    //Динамический класс для таба
    let status = 'noactive';
    if (this.state.selectedStatus === selector) {
      status = 'active';
    }
    return status;
  }

  render() {
    return (
      <div className="App-wrapper">
        <div className="App-tabs">
          <AppTab
            tabName="To read"
            tabPosition="side"
            statusSelect={this.statusSelectHandler}
            selector="toread"
            tabClass={this.selectTabClass('toread')}
            booksNum={this.getBooksAmount('toread')}
          />
          <AppTab
            tabName="In progress"
            tabPosition="center"
            statusSelect={this.statusSelectHandler}
            selector="inprogress"
            tabClass={this.selectTabClass('inprogress')}
            booksNum={this.getBooksAmount('inprogress')}
          />
          <AppTab
            tabName="Done"
            tabPosition="side"
            statusSelect={this.statusSelectHandler}
            selector="done"
            tabClass={this.selectTabClass('done')}
            booksNum={this.getBooksAmount('done')}
          />
        </div>
        <AppFilter
          filterTags={this.state.filterTags}
          tagClick={this.removeTag}
        />
        <div className="App-container">
          {
            this.isListEmpty()
          }
        </div>
      </div>
    );
  }
}

export default App;
