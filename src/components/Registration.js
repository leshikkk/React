import React, {Component} from "react";

const genders = [
    {
        value: "male",
        name: "Male",
    },
    {
        value: "female",
        name: "Female",
    },
    {
        value: "other",
        name: "Other",
    },
];


const countries = [
    {
        value: "blr",
        name: "Беларусь",
    },
    {
        value: "rus",
        name: "Россия",
    },
    {
        value: "ukr",
        name: "Украина",
    },
];

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", lastName: "", age: 0 , blrCur : "", usdCur : ""}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.name}, ${this.state.lastName}, ${this.state.age}`);
    };
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    onChangeGender = (e) => {
        this.setState({gender: e.target.value});
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <TextInput
                            name="name"
                            value={this.state.name}
                            onHandleChange={this.onChangeHandler}
                        />
                    </label>
                    <label>
                        Фамилия:
                        <input type="text" name="lastName"
                               value={this.state.lastName}
                               onChange={this.onChangeHandler}
                        />
                    </label>
                    <label>
                        Возвраст:
                        <input type="number" name="age"
                               value={this.state.age}
                               onChange={this.onChangeHandler}
                        />
                    </label>
                    <label>Пол:</label>
                    {genders.map((gender) => (
                        <div key={gender.name}>
                            <input
                                type="radio"
                                id={gender.value}
                                name="gender"
                                value={gender.value}
                                checked={gender.value === this.state.gender}
                                onChange={this.onChangeGender}
                            />
                            <label htmlFor={gender.value}>{gender.name}</label>
                        </div>
                    ))}
                    <br/>
                    <label>
                        Выберите вашу страну:
                        <select value={this.state.country} name="country" onChange={this.onChangeHandler}>
                            {countries.map(country => (
                                <option key={country.value} value={country.value}>{country.name}</option>
                            ))}
                        </select>
                    </label>
                    <input type="submit" value="Отправить"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    BYN
                    <BlrCurrency
                        name="blrCur"
                        value={this.state.blrCur}
                        onHandleChange={this.onChangeHandler}
                        />
                     USD
                    <UsdCurrency
                        name="usdCur"
                        value={this.state.usdCur}
                        onHandleChange={this.onChangeHandler}
                    />
                </form>
            </>
        )
    }
}

class TextInput extends Component {
    onHandleChange = (e) => {
        this.props.onHandleChange(e);
    };


    render() {
        return <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.onHandleChange}
        />
    }

}

class BlrCurrency extends Component{

    onHandleChange = (e) => {

        this.props.onHandleChange(e);
    };
    render() {
        return <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.onHandleChange}
        />
    }

}
class UsdCurrency extends Component{
    onHandleChange = (e) => {
        this.props.onHandleChange(e);
    };
    render() {
        return <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.onHandleChange}
        />
    }

}