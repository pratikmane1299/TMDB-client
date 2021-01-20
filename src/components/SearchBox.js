export default function SearchBox({ value, onChange }) {
  return <input 
    type="text" 
    name="query" 
    className="form-control" 
    placeholder="search movies" 
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
}