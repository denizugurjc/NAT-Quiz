import { Clock } from "./Clock"

export const TopBar = ({text, onTimeChange}) => {
    return (
        <div className="question-count">
              {text}
              <Clock onTimeChange={onTimeChange}/>
        </div>
    )
}