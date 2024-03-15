import WidgetsIcon from '@mui/icons-material/Widgets';
import EventIcon from '@mui/icons-material/EventNoteRounded';
import ChatIcon from '@mui/icons-material/ChatRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const Menubar = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const navigate = useNavigate();

  const gotoRes = () => {
    navigate("/resources");
  }
  const gotoChat = () => {
    navigate("/chats");
    window.location.reload();
  }
  const gotoEvents = () => {
    navigate("/events");
  }
  const gotoRequests = () => {
    navigate("/requests");
    window.location.reload();
  }

  return (
    <div className="menubar sticky flex sm:hidden items-center justify-evenly bottom-0 h-20 py-4 bg-bg1 dark:bg-dbg1 dark:text-white border-t border-border1 dark:border-dborder1 z-998">
      <div className="item" onClick={gotoRes}>
        <WidgetsIcon />
      </div>
      <div className="item" onClick={gotoChat}>
        <ChatIcon />
      </div>
      <div className="item" onClick={gotoEvents}>
        <EventIcon />
      </div>
      <div className="item">
        <NotificationsIcon onClick={() => setNotificationOpen(true)} />
      </div>
      
    </div>
  );
};

export default Menubar;