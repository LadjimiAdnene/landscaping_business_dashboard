import React from 'react';
import {
    ThemeProvider,
    MessageList,
    MessageGroup,
    Message,
    MessageMedia,
    MessageTitle,
    MessageText,
    MessageButtons,
    MessageButton,
    TextComposer,
    Row,
    IconButton,
    AddIcon,
    TextInput,
    SendButton,
    EmojiIcon
} from '@livechat/ui-kit';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    image: {
        maxWidth: "100%"
    },
});


class CustomMessageList extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <MessageList active>
                <Message date="21:38" isOwn={true} authorName="Me">
                    <MessageText>
                        I love them so
                        much!
                    </MessageText>
                </Message>
                <Message date="21:38" isOwn={true} authorName="Me">
                    <MessageText>This helps me a lot</MessageText>
                </Message>
                <Message date="21:38" isOwn={true} authorName="Me">
                    <MessageText>
                        I love them so much!
                    </MessageText>
                </Message>
                <Message date="21:38" isOwn={true} authorName="Me">
                    <MessageText>This helps me a lot</MessageText>
                </Message>
                <Message authorName="7188641267" date="21:37">
                    <MessageText>No problem!</MessageText>
                </Message>
                <Message authorName="7188641267">
                    <MessageText>
                        The fastest way to help your customers - start chatting with visitors
                        who need your help using a free 30-day trial.
                    </MessageText>
                </Message>
                <Message authorName="7188641267" date="21:39">
                    <MessageMedia>
                        <img className={classes.image}
                             src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png"/>
                    </MessageMedia>
                </Message>
                <Message authorName="7188641267" date="21:39">
                    <MessageMedia>
                        <img className={classes.image}
                             src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png"/>
                    </MessageMedia>
                </Message>
            </MessageList>


        );
    }
}

export default withStyles(styles)(CustomMessageList);