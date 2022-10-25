export class Department {
  public departmentId: number;
  public departmentName: string;
  public hod: string;
  public startYear: Date;
  public studentCount: number;

  constructor() {
    this.departmentId = 0;
    this.departmentName = "";
    this.hod = "";
    this.studentCount = 0;
  }
}
