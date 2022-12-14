import {
    Flex,
    Form,
    FormInput,
    FormPasswordInput,
    FormRoot,
    FormSubmit,
    Text,
    useToastShow,
} from "@/components";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();
    const showToast = useToastShow();

    const handleLogin = useCallback(async (values: any) => {}, []);

    return (
        <Flex direction="column" width="half" gap={7} padding="9">
            <FormRoot
                mode="all"
                onSubmit={handleLogin}
                onSubmitError={console.log}
            >
                <Form autoComplete="off">
                    <Flex direction="column" size="full" gap="7">
                        <FormInput
                            icon="User"
                            label="name"
                            name="name"
                            placeholder="enter your name..."
                        />
                        <FormInput
                            icon="Mail"
                            label="email"
                            name="email"
                            placeholder="enter your email..."
                        />
                        <FormInput
                            icon="Type"
                            label="subject"
                            name="subject"
                            placeholder="enter subject..."
                        />
                        <FormInput
                            icon="MessageCircle"
                            label="message"
                            name="message"
                            placeholder="enter your message..."
                        />
                    </Flex>
                    <FormSubmit inverted>Send</FormSubmit>
                </Form>
            </FormRoot>
        </Flex>
    );
};

export default Contact;
