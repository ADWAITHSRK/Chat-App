import { Input, Avatar, List, Card } from "antd";

const { Search } = Input;
const ChatPage = () => {
    
const users = [
    { name: "Alice", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Bob", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Charlie", img: "https://i.pravatar.cc/150?img=3" },
  ];
  
  const messages = [
    { from: "me", text: "Hey, how are you?" },
    { from: "them", text: "I'm good! How about you?" },
    { from: "me", text: "Doing well. What's up?" },
    { from: "them", text:"How is Your Weekend" },
    { from: "me", text: "Good" },
    { from: "them", text:"What about you" },


  ];

  return (
    <div className="w-full min-h-screeen grid grid-cols-4 px-5 mt-16 mb-28">
      <div className="col-span-1 border p-4 min-h-screen">
        <Search placeholder="Search user... " className="mb-6" />
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(user) => (
            <List.Item className="cursor-pointer hover:bg-gray-100 rounded-md ">
              <List.Item.Meta
                avatar={<Avatar src={user.img} />}
                title={<span className="font-semibold">{user.name}</span>}
              />
            </List.Item>
          )}
        ></List>
      </div>
      <div className="col-span-2 flex flex-col border p-4 mr-2 ml-2 min-h-screen">
        <div className="flex flex-col overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-md ${
                msg.from === "me"
                  ? "ml-auto bg-blue-100 "
                  : "mr-auto bg-gray-100 "
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="mt-auto mb-4">
          <Input.TextArea rows={2} placeholder="Type your message..." />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center col-span-1 p-4 border">
        <Card className="text-center w-full min-h-screen">
          <Avatar
            size={80}
            src="https://i.pravatar.cc/150?img=5"
            className="mx-auto mb-2"
          />
          <h2 className="font-semibold text-lg">Jane Doe</h2>
          <p className="text-gray-500">+91 9876543210</p>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;
