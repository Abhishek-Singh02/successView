import { Tab, TabList, TabTrigger, TabContent } from "./Tab";

export const Tabs = () => {
    return (
        <Tab defaultValue="First">
            <TabList>
                <TabTrigger value="First">First</TabTrigger>
                <TabTrigger value="Second">Second</TabTrigger>
                <TabTrigger value="Third">Third</TabTrigger>
            </TabList>
            <TabContent value="First">First Content</TabContent>
            <TabContent value="Second">Second Content</TabContent>
            <TabContent value="Third">Third Content</TabContent>
        </Tab>
    );
};
