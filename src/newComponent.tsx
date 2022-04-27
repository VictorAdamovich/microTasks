type NewComponentType = {
    students: Array<StydentType>
}
type StydentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'}
    ]

    return (
        <div>
            <ul>
                {props.students.map(el => <li key={el.id}><span>{el.name}:{el.age}</span></li>)}
            </ul>
            <table>
                {topCars.map((el, i) =>
                    <tr>
                        <td key={i + 1}>{el.manufacturer}:{el.model}</td>
                    </tr>)}
            </table>
        </div>
    )

}