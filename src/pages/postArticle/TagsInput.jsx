import React from 'react';



class TagsInput extends React.Component {
    constructor() {
        super()
        this.state = {
            newTag: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleRemoveTag = this.handleRemoveTag.bind(this)
    }

    handleChange(e) {
        this.setState({ newTag: e.target.value })
    }

    handleKeyDown(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            let newTag = this.state.newTag.trim()

            if (this.props.value.indexOf(newTag) === -1) {
                this.props.value.push(newTag)
                this.setState({ newTag: '' })
            }
            e.target.value = ''
        }
    }

    handleRemoveTag(e) {
        let tag = e.target.parentNode.textContent.trim()
        let index = this.props.value.indexOf(tag)
        this.props.value.splice(index, 1)
        this.setState({ newTag: '' })
    }

    render() {
        return (
            <div>
                <div className="mb-2">

                    <input type="text"
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown} 
                        className='bg-gray-100 border border-gray-300 p-2 mb-2 outline-none w-full' 
                        placeholder='Tags - type something and hit enter'
                    />
                    {this.props.value.map((tag, index) => (
                        <>
                            <button key={index} onClick={this.handleRemoveTag} className='button-brand mr-2'>
                                {tag} x
                            </button>
                        </>
                    ))}
                </div>
            </div>
        )
    }
}

export default TagsInput;