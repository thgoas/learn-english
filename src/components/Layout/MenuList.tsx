import { useList } from "@/contexts/listContext"
import { ILessonModel } from "@/models/lesson-model"
import { Inbox, Mail, Notes } from "@mui/icons-material"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export default function MenuList () {
  const {list, selectedLesson, setSelectedLesson} = useList()

  const handleSelectMenu = (lesson: ILessonModel) => {
    setSelectedLesson(lesson)
  } 
  return (
    <List>
        {list?.map((l) => (
          <ListItem key={l.lesson} disablePadding>
            <ListItemButton onClick={() => handleSelectMenu(l)} selected={selectedLesson?.lesson === l.lesson}>
              <ListItemIcon>
                <Notes />
              </ListItemIcon>
              <ListItemText primary={l.lesson} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  )
}