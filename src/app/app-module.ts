import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app';
import { BandasComponent } from './components/bandas/bandas';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, BandasComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
