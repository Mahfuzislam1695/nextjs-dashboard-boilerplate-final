// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

import { MdAdd } from "react-icons/md";

interface IFilter {
  headerName:string;
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  table: object;
  data: [];
  children: ReactNode;
  buttonName: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  userName?: string;
  usersNumber?: number; // Correctly typed setOpen
}

// ============== FOR EXPORT OPTION ================
// type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterTable: React.FC<IFilter> = ({
  headerName,
  filtering,
  setFiltering,
  buttonName,
  children,
  open,
  setOpen,
  userName,
  usersNumber,
}) => {
  // ============================= EXPORT STATES =============================
  // const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  // const [showPanel, setShowPanel] = useState<Checked>(false);

  // =================== 	HANDLE EXPORT FUNCTION ===========================
  return (
    <>
      <section className="my-5 mx-2">
        <div className="flex justify-between items-center">
          <div>
            <input
              type="text"
              placeholder="search .."
              name="search"
              value={filtering || ""}
              onChange={(e) => setFiltering(e.target.value)}
              className="bg-[#FFFFFF] text-[#1E1E1E] text-sm placeholder:text-sm placeholder:text-[##11E1E] outline-none border border-[#D4D4D4] w-80 px-4 py-2.5 rounded-md"
            />
          </div>
          {userName && usersNumber !== undefined && (
            <>
              <p className="text-xl">
                {userName} :{" "}
                <span className="font-semibold">{usersNumber}</span> জন{" "}
              </p>
            </>
          )}
          <div className="flex items-center gap-2">
            <div>
              {/* <DropdownMenu> */}
              {/* <DropdownMenuTrigger asChild>
                  <button className="bg-[#0075FF] text-base text-[#F5F5F5]  font-medium px-6 py-2.5 bg-link rounded flex items-center gap-2 cursor-pointer outline-none border-2">
                    <RiExportFill className=" font-medium w-5 h-5" />
                    export
                  </button>
                </DropdownMenuTrigger> */}

              {/* <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                    className="pl-6 flex items-center gap-2"
                  >
                    <FaFilePdf className="text-red-600 text-2xl " />{" "}
                    <span className="text-base">PDF-এক্সপোর্ট</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                    className="pl-6 flex items-center gap-2"
                  >
                    <SiMicrosoftexcel className="text-green-600 text-2xl " />{" "}
                    <span className="text-base">Excel-এক্সপোর্ট</span>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="">
                <div className="bg-[#388E3C] rounded-md text-base text-[#F5F5F5] font-medium px-8 py-2 border-4 flex justify-center items-center gap-2">
                  <MdAdd fontSize={20} />
                  {buttonName}
                </div>
              </DialogTrigger>

              <DialogContent className="bg-white w-[80vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{headerName}</DialogTitle>{" "}
                </DialogHeader>
                {children}
              </DialogContent>
            </Dialog>

            {/* <Dialog open={open} onOpenChange={setOpen}>
           
              <DialogTrigger className="">
                <div className="bg-[#388E3C] rounded-md text-base text-[#F5F5F5] font-medium px-8 py-2 border-4 flex justify-center items-center gap-2">
                  <MdAdd fontSize={20} />
                  {buttonName}
                </div>
              </DialogTrigger>
              <DialogContent className="bg-white w-[80vw] max-h-[90vh] overflow-y-auto">
                {children}
              </DialogContent>
            </Dialog> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterTable;
