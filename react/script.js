var TASKS = [
    ['Lamborghini', `Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.`],
    ['Ferrari', `Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 as Auto Avio Costruzioni, the company built its first car in 1940. However, the company's inception as an auto manufacturer is usually recognized in 1947 when the first Ferrari-badged car was completed.
    Ferrari is the world's most powerful brand according to Brand Finance.[6] In May 2012 the 1962 Ferrari 250 GTO became the most expensive car in history, selling in a private transaction for $38,115,000 to American communications magnate Craig McCaw.[7]`],
    ['Porsche', `Austrian engineer Ferdinand Porsche founded the company called "Dr. Ing. h. c. F. Porsche GmbH" in Austria in 1931,[4] then moved to its main offices at Kronenstraße 24 in the centre of Stuttgart. Initially, the company offered motor vehicle development work and consulting,[4] but did not build any cars under its own name. One of the first assignments the new company received was from the German government to design a car for the people, that is a "Volkswagen".[4] This resulted in the Volkswagen Beetle, one of the most successful car designs of all time.[5] The Porsche 64 was developed in 1939 using many components from the Beetle.[4]`],
    ['Audi', `The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[12] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.`],
    ['Task 5', 'Text 5'],
    ['Task 6', 'Text 6'],
    ['Task 7', 'Text 7'],
    ['Task 8', 'Text 8'],
    ['Task 9', 'Text 9'],
    ['Task 10', 'Text 10'],
    ['Task 11', 'Text 11'],
    ['Task 12', 'Text 12'],
    ['Task 13', 'Text 13'],
    ['Task 14', 'Text 14'],
    ['Task 15', 'Text 15'],
    ['Task 16', 'Text 16'],
    ['Task 17', 'Text 17'],
    ['Task 18', 'Text 18'],
    ['Task 19', 'Text 19'],
    ['Task 20', 'Text 20']
];

function popupShow() {
    var popupContent = document.querySelector('.popup__content');
    var popup = document.querySelector('.popup');
    popupContent.style.display = 'block';
    popup.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
}

function popupClose() {
    var popupContent = document.querySelector('.popup__content');
    var popup = document.querySelector('.popup');
    popupContent.style.display = 'none';
    popup.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
}

var Show = React.createClass({
    endShow: function() {
        //ReactDOM.render(<App />, document.querySelector('.content'));
        popupClose();
        ReactDOM.unmountComponentAtNode(document.querySelector('.popup__content'));
    },
    render: function() {
        return(
            <ul>
                <li key='test' className='note_show'>
                    <p className='note__title'>{this.props.elem[0]}</p>
                    <p className='note__text_show'>{this.props.elem[1]}</p>
                    <input type='button' className='end_show_top' value='< return' onClick={this.endShow} />
                    <input type='button' className='end_show_bot'value='< return' onClick={this.endShow} />
                </li>
            </ul>
        );
    }
});

var Edit = React.createClass({
    endEdit: function() {
        var elem = [document.querySelector('.note_edit__title').value, document.querySelector('.note_edit__text').value];
        this.props.callback(elem, this.props.index);
        document.querySelector('.note_edit__title').value = '';
        document.querySelector('.note_edit__text').innerHTML = '';
        popupClose();
        ReactDOM.unmountComponentAtNode(document.querySelector('.popup__content'));
    },
    cancelEdit: function() {
        document.querySelector('.note_edit__title').value = '';
        document.querySelector('.note_edit__text').innerHTML = '';
        popupClose();
        ReactDOM.unmountComponentAtNode(document.querySelector('.popup__content'));
    },
    render: function() {
        return(
            <div className='note_edit'>
                <input type='text' placeholder='Write title' className='note_edit__title' defaultValue={this.props.elem[0]}/>
                <textarea placeholder='Write text' className='note_edit__text' defaultValue={this.props.elem[1]}></textarea>
                <input type='button' className='note_edit__ok-button' value='Done' onClick={this.endEdit} />
                <input type='button' className='note_edit__cancel-button' value='Cancel' onClick={this.cancelEdit} />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            initialList: TASKS,
            currentList: []
        };
    },
    componentDidMount: function() {
        this.setState({currentList: this.state.initialList});
    },
    search: function(e) {
        var newList = this.state.initialList;
        newList = newList.filter( (elem) => {
            return elem[0].toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        if(newList == '') {
            this.setState({currentList: [['No such result', '']]});
        } else {
            this.setState({currentList: newList});
        }
    },
    show: function(i) {
        popupShow();
        ReactDOM.render(<Show elem={this.state.currentList[arguments[0]]} />, document.querySelector('.popup__content'));
    },
    delete: function(i) {
        var newList = this.state.initialList;
        newList.splice(i, 1);
        this.setState({initialList: newList, currentList: newList});
    },
    callback: function(mas, i) {
        this.state.initialList.splice(i, 1, mas);
        this.state.currentList.splice(i, 1, mas);
        this.setState({
            initialList: this.state.initialList,
            currentList: this.state.currentList
        });
    },
    edit: function(i) {
        popupShow();
        ReactDOM.render(<Edit callback={this.callback} elem={this.state.currentList[arguments[0]]} index={i} />, document.querySelector('.popup__content'));
    },
    addNote: function() {
        var addNote = document.querySelector('.add_note');
        if(addNote.style.display == 'block') {
            addNote.style.display = 'none';
        } else {
            addNote.style.display = 'block'
        }
    },
    addNoteTrue: function() {
        if(document.querySelector('.add_note__title').value == '' || document.querySelector('.add_note__text').value == '') {
            return alert('Write the text');
        }
        var note = [document.querySelector('.add_note__title').value, document.querySelector('.add_note__text').value];
        var newList = this.state.initialList;
        newList.unshift(note);
        this.setState({initialList: newList, currentList: newList});
        this.addNoteFalse();
    },
    addNoteFalse: function() {
        document.querySelector('.add_note__title').value = '';
        document.querySelector('.add_note__text').value = '';
        document.querySelector('.add_note').style.display = 'none';
    },
    render: function() {
        return(
            <div>
                <input type='text' placeholder='Search' className='search' onChange={this.search} />
                <input type='button' className='add_note__button' value='+ Add note' onClick={this.addNote} />
                <div className='add_note'>
                    <input type='text' placeholder='Write title' className='add_note__title' />
                    <textarea placeholder='Write text' className='add_note__text'></textarea>
                    <input type='button' className='add_note__add-button' value='Done'  onClick={this.addNoteTrue} />
                    <input type='button' className='add_note__cancel-button' value='Cancel'  onClick={this.addNoteFalse} />
                </div>
                <ul>
                    {
                        this.state.currentList.map( (key, i) => {
                            if(key[0] == 'No such result') {
                                return <p className='note__title'>{key[0]}</p>
                            }
                            return (
                                <div>
                                    <li key={key[0]} className='note'>
                                        <p className='note__title'>{key[0]}</p>
                                        <p className='note__text'>{key[1].length >= 200 ? `${key[1].match(/.{1,200}/i)}...` : key[1]}</p>
                                        <ul className='note__tools'>
                                            <li key='show' onClick={this.show.bind(null, i)}>Show</li>
                                            <li key='edit' onClick={this.edit.bind(null, i)}>Edit</li>
                                            <li key='delete' onClick={this.delete.bind(null, i)}>Delete</li>
                                        </ul>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('.content'));
