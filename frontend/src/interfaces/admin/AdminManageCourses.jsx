import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin";

function AdminManageCourses() {
  return (
    <>
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SidebarAdmin />
      </div>
    </>
  );
}

export default AdminManageCourses;
