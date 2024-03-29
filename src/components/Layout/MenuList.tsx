import { useList } from "@/contexts/listContext"
import { ILessonModel } from "@/models/lesson-model"
import { Check, Inbox, Lock, LockOpen, Mail, Notes } from "@mui/icons-material"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export default function MenuList () {
  const {list, selectedLesson, handleSelectedLesson} = useList()

  const handleSelectMenu = (lesson: ILessonModel) => {
    handleSelectedLesson(lesson)
  } 
  return (
    <List sx={{maxHeight: '50%', overflow: 'auto'}}>
        {list?.map((l) => (
          <ListItem key={l.lesson} disablePadding>
            <ListItemButton disabled={l.lock === 'closed'} onClick={() => handleSelectMenu(l)} selected={selectedLesson?.lesson === l.lesson}>
              <ListItemIcon>
               {l.lock === 'closed'  ? ( <Lock />) : l.lock === 'open' && l.status ? <Check /> : <LockOpen />  }
              </ListItemIcon>
              <ListItemText primary={l.lesson} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  )
}