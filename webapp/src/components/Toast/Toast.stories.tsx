import { AliasSolid } from "../../styles";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { ToastProvider, useToastShow } from "./Toast";

export const ToastStory = () => {
    return (
        <ToastProvider>
            <ToastDispatcher />
        </ToastProvider>
    );
};

const ToastDispatcher = () => {
    const showToast = useToastShow();

    const createToast = ( color: AliasSolid ) => () => {
        showToast( {
            title: `Some Title - ${Date.now().toString( 36 )}`,
            description: `Some Description for ${color}`,
            color,
        } );
    };

    return (
        <Flex direction="column" gap="4" css={{ width: '128px' }}>
            <Button fullWidth color="neutral" onClick={createToast( "neutral" )}>Neutral</Button>
            <Button fullWidth color="primary" onClick={createToast( "primary" )}>Primary</Button>
            <Button fullWidth color="secondary" onClick={createToast( "secondary" )}>Secondary</Button>
            <Button fullWidth color="error" onClick={createToast( "error" )}>Error</Button>
            <Button fullWidth color="success" onClick={createToast( "success" )}>Success</Button>
            <Button fullWidth color="info" onClick={createToast( "info" )}>Info</Button>
            <Button fullWidth color="warning" onClick={createToast( "warning" )}>Warning</Button>
        </Flex>
    );
};
