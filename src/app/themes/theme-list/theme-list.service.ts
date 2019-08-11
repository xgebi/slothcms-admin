import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class ThemeListService {
  private themeListUrl = "/api/themes";
  private themeListUrlSuffix = "/list";
  private useThemeUrlSuffix = "/use-theme";


  constructor(private http: HttpClient) { }

  getThemesListInformation() {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.themeListUrl + this.themeListUrlSuffix, httpOptions);
  }

  useTheme(themeName: string) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.post(this.themeListUrl + this.useThemeUrlSuffix, { theme: themeName }, httpOptions);
  }
}
