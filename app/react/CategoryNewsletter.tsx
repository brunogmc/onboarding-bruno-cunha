import React from "react";

interface CustomNewsletterCategory {
    categoryName: String
    handlecategory: Function
}

const NewsletterCategory: StorefrontFunctionComponent<CustomNewsletterCategory> = ({ categoryName, handlecategory }) => {

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        handlecategory(categoryName, !checked)
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                {categoryName}
            </label>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
        </div>
    )
}

export default NewsletterCategory