import { Flex } from "../Flex";
import { Switch } from "./Switch";

export const SwitchStory = ( props:any )=>(
  <Flex gap="6">
    <Switch {...props} color="primary" />
    <Switch {...props} color="info" />
    <Switch {...props} color="warning" />
    <Switch {...props} color="secondary" />
    <Switch {...props} color="error" />
    <Switch {...props} color="success" />
    <Switch {...props} color="neutral" />
</Flex>
)

SwitchStory.storyName = "Switch";

SwitchStory.args = {
  checked: true
};

SwitchStory.argTypes = {
    size: {
        options: [ "1", "2", "3","4","5" ],
        control: { type: "select" },
        defaultValue: "1",
    },
};