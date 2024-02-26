"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { AccordionDemo } from "@/utils/Shad-cn/Accordion";
import { AlertDemo } from "@/utils/Shad-cn/Alert";
import { AlertDialogDemo } from "@/utils/Shad-cn/AlertDialog";
import { AspectRatioDemo } from "@/utils/Shad-cn/AscpectRatio";
import { AvatarDemo } from "@/utils/Shad-cn/Avatar";
import { BadgeDemo } from "@/utils/Shad-cn/Badge";
import { ButtonDemo } from "@/utils/Shad-cn/Button";
import { CalendarDemo } from "@/utils/Shad-cn/Calendar";
import { CardWithForm } from "@/utils/Shad-cn/Card";
import { CheckboxDemo } from "@/utils/Shad-cn/Checkbox";
import { CollapsibleDemo } from "@/utils/Shad-cn/Collapsible";
import { ComboboxDemo } from "@/utils/Shad-cn/combobox";
import { CommandDemo } from "@/utils/Shad-cn/command";
import { ContextMenuDemo } from "@/utils/Shad-cn/contextmenu";
import { DataTableDemo } from "@/utils/Shad-cn/datatable";
import { DatePickerDemo } from "@/utils/Shad-cn/DatePicker";
import { DialogDemo } from "@/utils/Shad-cn/Dialog";
import { HoverCardDemo } from "@/utils/Shad-cn/hovercard";
import { DropdownMenuDemo } from "@/utils/Shad-cn/Dropdownmenu";
import { InputDemo } from "@/utils/Shad-cn/input";
import { LabelDemo } from "@/utils/Shad-cn/Label";
import { MenubarDemo } from "@/utils/Shad-cn/Menubar";
import { PopoverDemo } from "@/utils/Shad-cn/Popover";
import { NavigationMenuDemo } from "@/utils/Shad-cn/NavigationMenu";
import { ProgressDemo } from "@/utils/Shad-cn/progress";
import { RadioGroupDemo } from "@/utils/Shad-cn/RadioGroup";
import { ScrollAreaDemo } from "@/utils/Shad-cn/ScrollArea";
import { SelectDemo } from "@/utils/Shad-cn/Select";
import { SeparatorDemo } from "@/utils/Shad-cn/Separator";
import { SheetDemo } from "@/utils/Shad-cn/Sheet";
import { SkeletonDemo } from "@/utils/Shad-cn/Skeleton";
import { SliderDemo } from "@/utils/Shad-cn/Slider";
import { SwitchDemo } from "@/utils/Shad-cn/Switch";
import { TableDemo } from "@/utils/Shad-cn/Table";
import { TabsDemo } from "@/utils/Shad-cn/Tabs";
import { TextareaDemo } from "@/utils/Shad-cn/TextArea";
import { ToastDemo } from "@/utils/Shad-cn/Toast";
import { Toggle } from "@/components/ui/toggle"


export const components = [
  {
    id: 1,
    name: "Accordion",
    tagline: "A vertically stacked set of interactive headings that each reveal a section of content.",
    command: "npx shadcn-ui@latest add accordion",
    component:  (
        <div>
           <AccordionDemo />
        </div>
      ),
  },
  {
    id: 2,
    name: "Alert",
    tagline: "Displays a callout for user attention.",
    command: "npx shadcn-ui@latest add alert",
    component:  (
        <div>
           <AlertDemo />
        </div>
      ),
    
  },{
    id: 3,
    name: "Alert Dialog",
    tagline: "A modal dialog that interrupts the user with important content and expects a response.",
    command: "npx shadcn-ui@latest add alert-dialog",  
    component:  (
        <div>
           <AlertDialogDemo />
        </div>
      ),
    
},
  {
    id: 4,
    name: "Aspect Ratio",
    tagline: "Displays content within a desired ratio.",
    command: "npx shadcn-ui@latest add aspect-ratio",
    component: (
        <div>
           <AspectRatioDemo />
        </div>
      ),
    
  },
  {
    id: 5,
    name: "Avatar",
    tagline: "An image element with a fallback for representing the user.",
    command: "npx shadcn-ui@latest add avatar",
    component: (
        <div>
           <AvatarDemo />
        </div>
      ),
   
  },
  {
    id: 6,
    name: "Badge",
    tagline: "Displays a badge or a component that looks like a badge.",
    command: "npx shadcn-ui@latest add badge",
    component:  (
        <div>
           <BadgeDemo />
        </div>
      ),
  },
  {
    id: 7,
    name: "Button",
    tagline: "Displays a button or a component that looks like a button.",
      command: "npx shadcn-ui@latest add button",
      component:  (
          <div>
             <ButtonDemo />
          </div>
        ),
  },
  {
    id: 8,
    name: "Calendar",
    tagline: "A date field component that allows users to enter and edit date.",
    command: "",
    component:  (
        <div>
           <CalendarDemo />
        </div>
      ),
  },{
    id: 9,
    name: "Card",
    tagline: "Displays a card with header, content, and footer.",
    command: "npx shadcn-ui@latest add calendar", 
    component:  (
        <div>
           <CardWithForm />
        </div>
      ),
  },
  {
    id: 10,
    name: "Checkbox",
    tagline: "A control that allows the user to toggle between checked and not checked.",
    command: "npx shadcn-ui@latest add checkbox",
    component: (
        <div>
           <CheckboxDemo />
        </div>
      ),
  },
  {
    id: 11,
    name: "Collapsible",
    tagline: "An interactive component which expands/collapses a panel.",
    command: "npx shadcn-ui@latest add card",
    component: (
        <div>
           <CollapsibleDemo />
        </div>
      ),
    
  },
  {
    id: 12,
    name: "Combo-Box",
    tagline: "Displays content within a desired ratio.",
    command: "The Combobox is built using a composition of the <Popover /> and the <Command /> components.",
    component:(
        <div>
           <ComboboxDemo />
        </div>
      ),
    
  },
  {
    id: 13,
    name: "Command",
    tagline: "Fast, composable, unstyled command menu for React.",
    command: "npx shadcn-ui@latest add command",
    component: (
        <div>
           <CommandDemo />
        </div>
      ),
    
  },
  {
    id: 14,
    name: "Context Menu",
    tagline: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    command: "npx shadcn-ui@latest add context-menu",  
    component: (
        <div>
           <ContextMenuDemo />
        </div>
      ),
    
},
  {
    id: 15,
    name: "Data Table",
    tagline: "Powerful table and datagrids built using TanStack Table.",
    command: "npx shadcn-ui@latest add table",
    component: (
        <div>
           <DataTableDemo />
        </div>
      ),
    
  },
  {
    id: 16,
    name: "Date Picker",
    tagline: "A date picker component with range and presets.",
    command: "The Date Picker is built using a composition of the <Popover /> and the <Calendar /> components.",
    component: (
        <div>
           <DatePickerDemo />
        </div>
      ),
    
  },
  {
    id: 17,
    name: "Dialog",
    tagline: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    command: "npx shadcn-ui@latest add dialog",
    component: (
        <div>
           <DialogDemo />
        </div>
      ),
    
  },
  {
    id: 18,
    name: "Dropdown Menu",
    tagline: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    command: "npx shadcn-ui@latest add dropdown-menu",
    component: (
        <div>
           <DropdownMenuDemo />
        </div>
      ),
    
   },
  {
    id: 19,
    name: "Hover Card",
    tagline: "For sighted users to preview content available behind a link.",
    command: "npx shadcn-ui@latest add hover-card",
    component: (
        <div>
           <HoverCardDemo />
        </div>
      ),
    
  },
  {
    id: 20,
    name: "Input",
    tagline: "Displays a form input field or a component that looks like an input field.",
    command: "npx shadcn-ui@latest add input",
    component: (
        <div>
           <InputDemo />
        </div>
      ),
    
  },
  {
    id: 21,
    name: "Label",
    tagline: "Renders an accessible label associated with controls.",
    command: "npx shadcn-ui@latest add label",
    component: (
        <div>
           <LabelDemo />
        </div>
      ),
    
  },
  {
    id: 22,
    name: "Menubar",
    tagline: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    command: "npx shadcn-ui@latest add menubar", 
    component: (
        <div>
           <MenubarDemo />
        </div>
      ),
    
   },
  {
    id: 23,
    name: "Navigation Menu",
    tagline: "A collection of links for navigating websites.",
    command: "npx shadcn-ui@latest add navigation-menu", 
    component: (
        <div>
           <NavigationMenuDemo />
        </div>
      ),
    
  },
  {
    id: 24,
    name: "Popover",
    tagline: "Displays rich content in a portal, triggered by a button.",
    command: "npx shadcn-ui@latest add popover",
    component: (
        <div>
           <PopoverDemo />
        </div>
      ),
    
  },{
    id: 25,
    name: "Progress",
    tagline:"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    command: "npx shadcn-ui@latest add progress",
    component: (
        <div>
           <ProgressDemo />
        </div>
      ),
     
  },
  {
    id: 26,
    name: "Radio Group",
    tagline: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    command: "npx shadcn-ui@latest add radio-group",
    component: (
        <div>
           <RadioGroupDemo />
        </div>
      ),
    
  },
  {
    id: 27,
    name: "Scroll-area",
    tagline: "Augments native scroll functionality for custom, cross-browser styling.",
    command: "npx shadcn-ui@latest add scroll-area",
    component: (
        <div>
           <ScrollAreaDemo />
        </div>
      ),
    
  },
  {
    id: 29,
    name: "Select",
    tagline: "Displays a list of options for the user to pick from—triggered by a button..",
    command: "npx shadcn-ui@latest add select",
    component: (
        <div>
           <SelectDemo />
        </div>
      ),
    
  },
  {
    id: 30,
    name: "Separator",
    tagline: "Visually or semantically separates content.",
    command: "npx shadcn-ui@latest add separator",
    component: (
        <div>
           <SeparatorDemo />
        </div>
      ),
    
  },
  {
    id: 31,
    name: "Sheet",
    tagline: "Extends the Dialog component to display content that complements the main content of the screen..",
    command: "npx shadcn-ui@latest add sheet",
    component: (
        <div>
           <SheetDemo />
        </div>
      ),
    
  },
  {
    id: 32,
    name: "Skeleton",
    tagline: "Use to show a placeholder while content is loading.",
    command: "npx shadcn-ui@latest add skeleton",
    component: (
        <div>
           <SkeletonDemo />
        </div>
      ),
    
  },
  {
    id: 33,
    name: "Slider",
    tagline: "An input where the user selects a value from within a given range.",
    command: "npx shadcn-ui@latest add slider",  
    component: (
        <div>
           <SliderDemo />
        </div>
      ),
    
   },
   {
    id: 34,
    name: "Switch",
    tagline: "A control that allows the user to toggle between checked and not checked.",
    command: "npx shadcn-ui@latest add switch", 
    component: (
        <div>
           <SwitchDemo />
        </div>
      ),
    
 },
  {
    id: 35,
    name: "Select",
    tagline: "Displays a list of options for the user to pick from—triggered by a button..",
    command: "npx shadcn-ui@latest add table",  
    component: (
        <div>
           <SelectDemo />
        </div>
      ),
    
},
  {
    id: 36,
    name: "Separator",
    tagline: "Visually or semantically separates content.",
    command: "npx shadcn-ui@latest add tabs",
    component: (
        <div>
           <SeparatorDemo />
        </div>
      ),
    
  },
  {
    id: 37,
    name: "Table",
    tagline: "A responsive table component.",
    command: "npx shadcn-ui@latest add table",
    component:  (
        <div>
          <TableDemo />
        </div>
      ),
    },

  {
    id: 38,
    name: "Tabs",
    tagline: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    command: "npx shadcn-ui@latest add tabs",  
    component: (
        <div>
           <TabsDemo />
        </div>
      ),
    
  },
  {
    id: 39,
    name: "Textarea",
    tagline: "Displays a form textarea or a component that looks like a textarea.",
    command: "npx shadcn-ui@latest add textarea",
    component: (
        <div>
          <TextareaDemo />
        </div>
      ),
    },
  
  {
    id: 40,
    name: "Toast",
    tagline: "A succinct message that is displayed temporarily.",
    command: "npx shadcn-ui@latest add toast",
    component: (
        <div>
           <ToastDemo />
        </div>
      ),
    },

  {
    id: 41,
    name: "Toggle",
    tagline: "A two-state button that can be either on or off.",
    command: "npx shadcn-ui@latest add toggle",
    component: (
        <div>
          <Toggle />
        </div>
      ),
    },
  
  {
    id: 42,
    name: "Tooltip",
    tagline: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    command: "npx shadcn-ui@latest add tooltip", 
    component:  (
        <div>
           <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
        </div>
      )
    
}

];
