import {useState, useEffect} from 'react'
import Pet from "./Pet"
const animals = ["dog", "cat","bird", "rabbit", "reptile"]
const  breeds = []

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("")
    const [breed, setBreed]= useState("")
    const [pets, setPets]=useState([])

    useEffect(() => {
        requestPets();
    },[]);

    async function requestPets(){
        const promiseRespose = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const responseJson = await promiseRespose.json()
        setPets(responseJson.pets)
    }
    return(
        <div className="search-params">
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        onChange = { (e) => setLocation(e.target.value)}
                        id ="location" 
                        value ={location} 
                        placeholder="Location"

                    /> 
                    </label>
                <label htmlFor='animal'>
                        Animal
                    <select 
                        id = "animal"
                        value={animal}
                        onChange = { (e) => {setAnimal(e.target.value)
                        setBreed("")}}
                    >
                        <option />
                            {animals.map(animal => <option key = {animal}> {
                                animal} </option>)}
                    </select>
                    
                </label>
                <label htmlFor='breed'>
                    Breed
                    <select 
                        id = "breed"
                        disabled={breeds.length === 0}
                        value={breed}
                        onChange = { (e) => {setBreed(e.target.value)}}
                    >
                        <option />
                            {breeds.map(breed => <option key = {breed}> {
                                breed} </option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>

    )
    }
    export default SearchParams;