import { HttpParams } from '@angular/common/http';
import { SelectItem } from 'primeng/api';

export class CustomUtils {

    public static CAMPO_VALOR_PADRAO = 'id';
    public static CAMPO_LABEL_PADRAO = 'nome';
  
    public static entityToDropDown(list: any[], label, value): SelectItem[] {
      const items: SelectItem[] = [];
  
      list.forEach(item => {
        items.push({ label: item[label], value: item[value]});
  
      });
      return items;
    }
  
    public static entityToDropDownObjectValue(list: any[], label): SelectItem[] {
      const items: SelectItem[] = [];
  
      list.forEach(item => {
        items.push({ label: item[label], value: item});
  
      });
      return items;
      }

  }