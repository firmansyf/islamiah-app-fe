import { AlQuranModule } from "@/pages/al-quran/al-quran";
import { Dashboard } from "@/pages/dashboard";
import { HadistModule } from "@/pages/hadist/hadist";
import { KalenderIslamModule } from "@/pages/kalender-islam/kalender-islam";
import {
  SquaresPlusIcon,
  BookOpenIcon,
  FolderOpenIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const icon = {
  className: "w-5 h-5 text-inherit",
};
export const routes = [
  {
    pages: [
      {
        icon: <SquaresPlusIcon {...icon} />,
        name: "dashboard",
        path: "/",
        element: <Dashboard />,
      },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "al-Quran",
        path: "/al-quran",
        element: <AlQuranModule />,
      },
      {
        icon: <FolderOpenIcon {...icon} />,
        name: "hadist",
        path: "/hadist",
        element: <HadistModule />,
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "kalender Islam",
        path: "/kalender-islam",
        element: <KalenderIslamModule />,
      },
    ],
  },
];
