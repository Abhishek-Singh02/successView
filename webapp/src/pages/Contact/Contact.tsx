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
import image from "@/assets/contact.png";

export const Contact = () => {
    const navigate = useNavigate();
    const showToast = useToastShow();

    const handleLogin = useCallback(async (values: any) => {}, []);

    return (
        <Flex
            width="full"
            center
            css={{
                "@bp1": {
                    height: "$full",
                },
                "@mbp1": {
                    width: "$full",
                    flexDirection: "column",
                },
            }}
            gap={7}
            padding="9"
        >
            <Flex width="full">
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

            <Flex
                css={{
                    "@mbp1": {
                        display: "none",
                    },
                }}
                width="full"
            >
                <img src={image} width="100%" />
            </Flex>
        </Flex>
    );
};

export default Contact;
