import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
        const { onLanguageChange } = this.context;
        return (
            <div>
                Select language:
                <i
                    className="flag us"
                    onClick={() => onLanguageChange("english")}
                />
                <i
                    className="flag az"
                    onClick={() => onLanguageChange("azeri")}
                />
            </div>
        );
    }
}

export default LanguageSelector;
