# ready-bot

This is a forked and modified version of the [this](https://github.com/BurnsCommaLucas/ready-bot) discord ready bot. I wanted to make some changes to the way the bot worked for the way me and my friends use a ready checker. I used the node js version as a jumping off point because I'm much more comfortable working in it than kotlin. I'm just self hosting this for personal use, if you want to use it I recommend you do the same.

The primary difference between this and the original is that I wanted cleaner status message handling that doesn't spam the chat. There is now one single status message that gets updated as people ready and unready. Any individual ready messages are sent as ephemeral. The status command moves this status message back up to the top of chat and removes the original, so there's only ever one status message for a ready check.

I also added action buttons for readying and unreadying.

The big new feature is auto adding all the members of the voice chat that the person initiating the check is currently in. This is a much more elegant way of tagging people for the way me and my friends use this.

## Usage

Once you add the bot to your server, start a ready check for a number of users with:

```
/check type:Count count:<number>
```
or check for specific users with
```
/check type:Mentions mentions:<user tag> <user tag> ...
```
or tag everyone in the voice channel you are in with
```
/check type:Channel
```
and have users ready-up with 
```
/ready
```
or just by hitting the Ready button on the status message!

Bring the status message back to the top of chat with 
```
/status
```
Full usage can be found by typing 
```
/help
```
Ready checks can be overridden by invoking the /check command again, and checks will only be performed if the `count` or number of `mentions` (of non-bot members) entered is greater than 0. The person who initiates the ready check may also respond to the check as ready.

If you experience any unusual behavior from the bot or think of a feature that could be added, please open an issue here.
