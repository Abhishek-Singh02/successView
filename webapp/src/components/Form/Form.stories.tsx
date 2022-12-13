import { useState } from "react";
import { FormRoot, Form } from "./Form";
import { FormInput } from "./FormInput";
import { FormCheckbox } from "./FormCheckbox";
import { FormSelect } from "./FormSelect";
import { SelectOption } from "../Select";
import { Button } from "../Button";
import { Text } from "../Text";

export const FormStory = ( props: any ) => {
    const [ submitState, setSubmitState ] = useState( { select: "", name: "" } );
    const [ state, setState ] = useState( { select: "", name: "" } );

    return (
        <FormRoot onSubmit={setSubmitState as any} onChange={setState as any}>
            <Form css={{ width: "$half" }}>
                <FormInput
                    {...props}
                    name="text"
                    defaultValue=""
                    placeholder="Text"
                    label="Label"
                />
                <FormCheckbox
                    {...props}
                    name="checkbox"
                    defaultValue=""
                    label="Checkbox"
                />
                <FormSelect
                    {...props}
                    name="select"
                    placeholder="Select a value..."
                    label="Select"
                >
                    <SelectOption value="One" />
                    <SelectOption value="Two" />
                    <SelectOption value="Three" />
                    <SelectOption value="Four" />
                </FormSelect>
                <Button type="submit">Submit</Button>
            </Form>
            <Text css={{ padding: "$3" }}>{JSON.stringify( state )}</Text>
            <Text css={{ padding: "$3" }}>{JSON.stringify( submitState )}</Text>
        </FormRoot>
    );
};

FormStory.storyName = "Form";

FormStory.args = {
    disabled: false,
}

FormStory.argTypes = {};
