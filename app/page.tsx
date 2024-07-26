"use client"
import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import Apps from '@mui/icons-material/Apps';
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import Label from '@mui/icons-material/Label';
import People from '@mui/icons-material/People';
import Info from '@mui/icons-material/Info';
import Star from '@mui/icons-material/Star';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ScheduleSendRoundedIcon from '@mui/icons-material/ScheduleSendRounded';
import AllInboxRoundedIcon from '@mui/icons-material/AllInboxRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

export default function Home() {
  const [index, setIndex] = React.useState(0);
  return (
   <>
   <Grid container spacing={2} sx={{ flexGrow: 1 }}>
  <Grid xs={8}>
  <Button startDecorator={<CreateRoundedIcon />} size="lg">Compose</Button>
  <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          '--ListItem-paddingLeft': '0px',
          '--ListItemDecorator-size': '64px',
          '--ListItem-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: 'flex-end',
            pr: '18px',
          },
          '& [role="button"]': {
            borderRadius: '0 20px 20px 0',
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            color={index === 0 ? 'primary' : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <InboxIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Inbox</ListItemContent>
            <Typography
              level="body-sm"
              sx={{ fontWeight: 'bold', color: 'inherit' }}
            >
              1,950
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 1}
            color={index === 1 ? 'neutral' : undefined}
            onClick={() => setIndex(1)}
          >
            <ListItemDecorator>
              <Star fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Starred</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 5}
            color={index === 5 ? 'neutral' : undefined}
            onClick={() => setIndex(5)}
          >
            <ListItemDecorator>
              < AccessTimeFilledRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Snoozed</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 6}
            color={index === 6 ? 'neutral' : undefined}
            onClick={() => setIndex(6)}
          >
            <ListItemDecorator>
              <SendRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Sent</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 7}
            color={index === 7 ? 'neutral' : undefined}
            onClick={() => setIndex(7)}
          >
            <ListItemDecorator>
              <FileCopyRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Drafts</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 8}
            color={index === 8 ? 'neutral' : undefined}
            onClick={() => setIndex(8)}
          >
            <ListItemDecorator>
              {/* < fontSize="lg" /> */}
            </ListItemDecorator>
            <ListItemContent>Important</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 9}
            color={index === 9 ? 'neutral' : undefined}
            onClick={() => setIndex(9)}
          >
            <ListItemDecorator>
              <ChatRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Chats</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 10}
            color={index === 10 ? 'neutral' : undefined}
            onClick={() => setIndex(10)}
          >
            <ListItemDecorator>
              <ScheduleSendRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Scheduled</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 11}
            color={index === 11 ? 'neutral' : undefined}
            onClick={() => setIndex(11)}
          >
            <ListItemDecorator>
              <AllInboxRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>All mail</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 12}
            color={index === 12 ? 'neutral' : undefined}
            onClick={() => setIndex(12)}
          >
            <ListItemDecorator>
              <ReportRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Spam</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 13}
            color={index === 13 ? 'neutral' : undefined}
            onClick={() => setIndex(13)}
          >
            <ListItemDecorator>
              <DeleteRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Trash</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton
            selected={index === 2}
            color={index === 2 ? 'success' : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            Categories
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 3}
                color={index === 3 ? 'primary' : undefined}
                onClick={() => setIndex(3)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Social</ListItemContent>
                <Typography level="body-sm">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 4}
                color={index === 4 ? 'warning' : undefined}
                onClick={() => setIndex(4)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Updates</ListItemContent>
                <Typography level="body-sm">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 14}
            color={index === 14 ? 'neutral' : undefined}
            onClick={() => setIndex(14)}
          >
            <ListItemDecorator>
              <SettingsRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Manage labels</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 15}
            color={index === 15 ? 'neutral' : undefined}
            onClick={() => setIndex(15)}
          >
            <ListItemDecorator>
              <AddRoundedIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Create new label</ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Grid>

  <Grid xs={4}>
    f
  </Grid>
 
</Grid>
   </>
  );
}
